
"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';
import { z } from 'zod'
import fs from 'fs/promises';
import path from 'path';
import { getIp } from '@/lib/getIp';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { put } from "@vercel/blob";


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
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(1, '180 s'),
});



export async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const ip = getIp();
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip
  );
  if (!success) {
    console.log("rate limit")
    return { message: 'You can only submit one form every 3 minutes :)' }
  }
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    signature: formData.get('signature'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message, signature } = validatedFields.data

  // Save the signature as a PNG file
  if (signature) {
    const buffer = Buffer.from(signature, 'base64')
    const fileName = `signature_${Date.now()}.png`
    const filePath = path.join( 'public', 'signatures', fileName)

    try {
      const { url } = await put(filePath, buffer,{access: 'public'})
      console.log(`Signature saved: ${fileName}`)
    } catch (error) {
      console.error('Error saving signature:', error)
      return { errors: { signature: ['Failed to save signature'] } }
    }
  }

  // Here you would typically send the data to your backend or API
  console.log('Form submitted:', { name, email, message, signatureSaved: !!signature })

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  revalidatePath('/')
  return { message: 'Form submitted successfully!' }
}

export async function saveSignature(signatureData: string) {
  const ip = getIp();
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip
  );
  if (!success) {
    console.log("rate limit")
    return { message: 'You can only leave your signature once :)' }
  }
  try {
    const base64Data = signatureData.replace(/^data:image\/png;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')
    const fileName = `signature_${Date.now()}.png`
    const filePath = path.join( 'public', 'signatures', fileName)

    const { url } = await put(filePath, buffer,{access: 'public'})
    revalidatePath('/')
    return { success: true, message: 'Signature saved successfully!' }
  } catch (error) {
    console.error('Error saving signature:', error)
    return { success: false, message: 'Failed to save signature. Please try again.' }
  }
}







