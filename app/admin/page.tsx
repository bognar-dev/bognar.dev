"use client"
import Button from "@/components/button";
import { signIn } from '@/app/actions';
import { SubmitButton } from "@/components/submit-button";
import {experimental_useFormState} from 'react-dom'

const initialState = {
  message: null,
}


export default function SignupPage() {
  const [state, formAction] = experimental_useFormState(signIn, initialState)
  return (
    // @ts-ignore
    <form className="grid gap-4 justify-center items-center" action={formAction} method="POST">
      <input type="username" name="username" required/>
      <input type="password" name="password" required/>
      <Button>
      <SubmitButton>Login</SubmitButton>
      </Button>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
    
  );
}



