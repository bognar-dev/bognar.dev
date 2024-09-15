'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
        Sign in with GitHub
      </Button>
    </div>
  )
}