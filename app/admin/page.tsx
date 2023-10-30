import Button from "@/components/button";
import { cookies } from 'next/headers'
export default function SignupPage() {
  const createAccount = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password
    }
    console.log({username, password });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${process.env.BACKEND_URL}/login`,options)
    const data = await response.json();
    cookies().set('token',data.token)
    console.log(data)
    console.log(`token in cookies ${cookies().get('token')?.value}`)
      const statusResp = await fetch(`${process.env.BACKEND_URL}/private/status`,{headers:{Authorization: `Bearer ${cookies().get('token')?.value}`}})
      const status = await statusResp.json();
      console.log(status)
    
    
  };

  return (
    <form action={createAccount} method="POST">
      <input type="username" name="username" required/>
      <input type="password" name="password" required/>
      <Button>
      <button type="submit">Login</button>
      </Button>
    </form>
  );
}


