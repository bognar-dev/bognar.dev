'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function ErrorMessage() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    return (
        <p className="mb-4">
            {error === 'AccessDenied' 
                ? 'You are not authorized to access this page.' 
                : 'An error occurred during authentication.'}
        </p>
    )
}

export default function ErrorPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
                <Suspense fallback={<p>Loading...</p>}>
                    <ErrorMessage />
                </Suspense>
                <a href="/" className="text-primary hover:underline">
                    Return to Home
                </a>
            </div>
        </div>
    )
}