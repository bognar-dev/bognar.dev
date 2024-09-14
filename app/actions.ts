"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';
import { z } from 'zod'
import { getIp } from '@/lib/getIp';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { put } from "@vercel/blob";
import { sql } from '@vercel/postgres';

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  signature: z.string().optional(),
})

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    signature?: string[];
  };
  message?: string;
}

const ratelimit = new Ratelimit({
  redis: kv,
  // 1 request from the same IP in 180 seconds
  limiter: Ratelimit.slidingWindow(1, '180 s'),
});

async function logAction(action: string, details: string) {
  try {
    await sql`
      INSERT INTO logs (action, details)
      VALUES (${action}, ${details})
    `;
  } catch (error) {
    console.error('Error logging action:', error);
  }
}

export async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const ip = getIp();
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);
  
  if (!success) {
    await logAction('RATE_LIMIT', `IP: ${ip}`);
    return { message: 'You can only submit one form every 3 minutes :)' }
  }

  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    signature: formData.get('signature'),
  })

  if (!validatedFields.success) {
    await logAction('FORM_VALIDATION_ERROR', JSON.stringify(validatedFields.error.flatten().fieldErrors));
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message, signature } = validatedFields.data

  let signatureUrl = '';
  if (signature) {
    const buffer = Buffer.from(signature.replace(/^data:image\/png;base64,/, ''), 'base64')
    const fileName = `signature_${Date.now()}.png`
    const filePath = `public/signatures/${fileName}`

    try {
      const { url } = await put(filePath, buffer, { access: 'public' })
      signatureUrl = url;
      await logAction('SIGNATURE_SAVED', `File: ${fileName}`);
    } catch (error) {
      console.error('Error saving signature:', error)
      await logAction('SIGNATURE_SAVE_ERROR', JSON.stringify(error));
      return { errors: { signature: ['Failed to save signature'] } }
    }
  }

  // Log form submission
  await logAction('FORM_SUBMITTED', JSON.stringify({ name, email, signatureSaved: !!signature }));

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  revalidatePath('/')
  return { message: 'Form submitted successfully!' }
}

export async function saveSignature(signatureData: string) {
  const ip = getIp();
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);
  
  if (!success) {
    await logAction('RATE_LIMIT', `IP: ${ip}`);
    return { message: 'You can only leave your signature once :)' }
  }

  try {
    const base64Data = signatureData.replace(/^data:image\/png;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')
    const fileName = `signature_${Date.now()}.png`
    const filePath = `public/signatures/${fileName}`

    const { url } = await put(filePath, buffer, { access: 'public' })
    await logAction('SIGNATURE_SAVED', `File: ${fileName}`);
    revalidatePath('/')
    return { success: true, message: 'Signature saved successfully!' }
  } catch (error) {
    console.error('Error saving signature:', error)
    await logAction('SIGNATURE_SAVE_ERROR', JSON.stringify(error));
    return { success: false, message: 'Failed to save signature. Please try again.' }
  }
}