'use client'

import {experimental_useFormStatus as useFormStatus } from "react-dom";
export function SubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending}>
            {children}
        </button>
    )
}