"use client"
import Button from "@/components/button";
import { signIn } from '@/app/actions';
import { SubmitButton } from "@/components/submit-button";

import { useFormState } from "react-dom";

const initialState = {
  message: null,
}


export default function SignupPage() {
  // @ts-expect-error
  const [state, formAction] = useFormState(signIn, initialState)
  return (

    <form className="grid gap-4 justify-center items-center" action={formAction} method="POST">
      <input type="username" name="username" required />
      <input type="password" name="password" required />
      <SubmitButton>Login</SubmitButton>
      <p aria-live="polite" className="self-center">
        {state?.message}
      </p>
    </form>

  );
}



