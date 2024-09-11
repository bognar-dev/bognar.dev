
"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';
import { z } from 'zod'
import fs from 'fs/promises';
import path from 'path';

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

export async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
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
    const filePath = path.join(process.cwd(), 'public', 'signatures', fileName)

    try {
      await fs.mkdir(path.dirname(filePath), { recursive: true })
      await fs.writeFile(filePath, buffer)
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

  return { message: 'Form submitted successfully!' }
}

export async function saveSignature(signatureData: string) {
  try {
    const base64Data = signatureData.replace(/^data:image\/svg\+xml;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')
    const fileName = `signature_${Date.now()}.svg`
    const filePath = path.join(process.cwd(), 'public', 'signatures', fileName)

    await fs.mkdir(path.dirname(filePath), { recursive: true })
    await fs.writeFile(filePath, buffer)

    return { success: true, message: 'Signature saved successfully!' }
  } catch (error) {
    console.error('Error saving signature:', error)
    return { success: false, message: 'Failed to save signature. Please try again.' }
  }
}

export const signIn = async (prevState: any, formData: FormData) => {

  const username = formData.get("username");
  const password = formData.get("password");
  const user = {
    username,
    password
  }
  const options: RequestInit = {
    cache: 'no-store' as RequestCache,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(`${process.env.BACKEND_URL}/login`, options)
  const data = await response.json()
  console.log(data)
  cookies().delete('jwt')
  cookies().set('jwt', data.token)

  if (data.status === "success"||data.status==='Successfully authenticated user'||data.status==='new token generated'||(data.token !== undefined||null)) {
    console.log("success")
    redirect('/admin/dashboard')

  } else {
    console.log('login failed')
    return { message: 'Login failed' }
  }

};




export const sendEditedProject = async (prevState: any, formData: FormData) => {
  
  if (formData === null) {
    return { message: 'updateProject failed' }
  }
  const token = cookies().get('jwt')
  if (token === undefined || token.value === '') {
    return { message: "token not defined" }
  }
  const tags = formData.getAll('tag')
  formData.delete('tag')
  formData.set('tags',JSON.stringify(tags))
  console.log(formData)
    const response : Response = await fetch(`${process.env.BACKEND_URL}/private/updateProject`, {
    cache: 'no-store' as RequestCache,
    method: 'POST',
    headers: {
      'Authorization': token.value,
    },
    body: formData
  })
 
  revalidatePath('/')
  return { message: 'success' }

}





