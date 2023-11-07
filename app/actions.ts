
"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from '@supabase/ssr'



export const signIn = async (formData: FormData) => {

  const username = formData.get("username");
  const password = formData.get("password");
  const user = {
    username,
    password
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(`${process.env.BACKEND_URL}/login`, options)

  const data = await response.json();
  cookies().delete('jwt')
  cookies().set('jwt', data.token)
  
  if (data.status === "success") {
    console.log(data + " success")
    redirect('/admin/dashboard')
  } else {
    console.log(data+" cant auth")
  }

};


export const sendEditedProject = async(formData:FormData) => {
  const cookieStore = cookies()

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
  console.log(formData)
  const file = formData.get('image') as File;
  const { data, error } = await supabase
    .storage
    .from('images')
    .upload('test1.png',file, {
      cacheControl: '3600',
      upsert: false
    })

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${process.env.BACKEND_URL}/updateProject`, options)

    console.log(data)
    console.log(error)
}





