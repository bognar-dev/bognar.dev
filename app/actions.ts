
"use server"

import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

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
  console.log(data)
  cookies().delete('jwt')
  cookies().set('jwt', data.token)
  /* const statusResp = await fetch(`${process.env.BACKEND_URL}/private/status`, { headers: { Authorization: `Bearer ${cookies().get('jwt')?.value}` } })
  const status = await statusResp.json();
  console.log(status.status)
  if (status.status === 'You are logged in') {
    redirect('/admin/dashboard')
  } else {
    console.log("cant auth")
  } */

};