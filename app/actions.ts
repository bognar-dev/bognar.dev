
"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { revalidatePath } from 'next/cache';
import { Options } from 'next/dist/server/base-server';
import { NextResponse } from 'next/server';



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
  console.log(formData)
  if (formData === null) {
    return { message: 'updateProject failed' }
  }
  /* const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )

  const file = formData.get('image') as File;
  if (file.name !== 'undefined') {
    console.log("new file found")
    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(`/${file.name}`, file, {
        cacheControl: '3600',
        upsert: false
      }) 
    if (error !== null) {
      return { message: error.stack }
    }
    formData.set('image', data.path)
    console.log(data.path)
  } else {
    const url = formData.get('imageURL') as string
    formData.set('image', url)
  }
  formData.delete('imageURL')
  console.log("imageURL: " + formData.get('image'))
  */
  
  
  const token = cookies().get('jwt')
  if (token === undefined || token.value === '') {
    return { message: "token not defined" }
  }
  const tags = formData.getAll('tag')
  formData.delete('tag')
  formData.set('tags',JSON.stringify(tags))
  
  console.log(formData.get('tags'));

  const response : Response = await fetch(`${process.env.BACKEND_URL}/private/updateProject`, {
    cache: 'no-store' as RequestCache,
    method: 'POST',
    headers: {
      'Authorization': token.value,
    },
    body: formData
  })
  const data = await response.json()
  console.log(data)

  revalidatePath('/')
  return { message: 'success' }

}





