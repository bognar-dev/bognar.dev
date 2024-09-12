'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useFormState } from 'react-dom'
import { submitForm, FormState } from '@/app/actions'
import SignatureCanvas from '@/components/signature-canvas'

const initialState: FormState = {
  errors: {},
  message: "",
}

const PlayfulContactForm: React.FC = () => {
  const [state, formAction] = useFormState(submitForm, initialState)
  const [signature, setSignature] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleSubmit = async (formData: FormData) => {
    if (signature) {
      // Remove the "data:image/png;base64," prefix
      const base64Data = signature.split(',')[1]
      formData.append('signature', base64Data)
    }
    await formAction(formData)
  }

  const handleSignatureChange = (signatureData: string | null) => {
    setSignature(signatureData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-center bg-background p-4"
    >
      <div className="w-full max-w-4xl bg-background-100 rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-primary-600 p-8 text-text-50">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="mb-4">I&apos;d love to hear from you. Send us a message and I&apos;ll get back to you as soon as possible.</p>
          </div>
          <div className="md:w-1/2 p-8">
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text-700 font-bold mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 text-text-700 bg-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-text-700 font-bold mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 text-text-700 bg-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-text-700 font-bold mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 text-text-700 bg-background-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></motion.textarea>
                {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
              </div>
              <div ref={containerRef}>
                <SignatureCanvas onSignatureChange={handleSignatureChange} />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary-500 text-text-50 font-bold py-2 px-4 rounded-lg hover:bg-primary-600 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
            {state.message && (
              <p className="mt-4 text-green-500 text-center">{state.message}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PlayfulContactForm