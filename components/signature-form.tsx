'use client'

import React, { useState } from 'react'
import SignatureCanvas from '@/components/signature-canvas'
import { saveSignature } from '@/app/actions'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const SignatureForm: React.FC = () => {
    const [signature, setSignature] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (signature) {
            const result = await saveSignature(signature)
            setMessage(result.message)
            if (result.success) {
                setSignature(null)
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-full flex items-center justify-center bg-background p-4"
        >
            <div className="w-full max-w-4xl bg-background-100 rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 bg-primary-600 p-8 text-text-50">
                        <h2 className="text-4xl font-bold mb-4">Just here for signature gallery?</h2>
                        <p className="mb-4">Then please fill out the form below and submit it.</p>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                    
                               
                                <SignatureCanvas onSignatureChange={setSignature} />
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-primary-500 text-text-50 font-bold py-2 px-4 rounded-lg hover:bg-primary-600 transition duration-300"
                            >
                                Send Signature
                            </motion.button>
                            {message && (
                                <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SignatureForm