
"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';



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





