'use client'
import { useState } from "react";
//@ts-ignore
import {useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";
export function SubmitButton({ children,className }: { children: React.ReactNode, className?:string }) {
    
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending} className={twMerge(' text-sm font-medium text-text-900 py-2 px-4 rounded-md bg-primary-500 shadow-sm shadow-primary-200 hover:shadow-primary-500 hover:translate-x-1 transition-all justify-self-center', className)}>
            {children}
        </button>
    )
}


