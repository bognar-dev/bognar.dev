'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useFormState } from 'react-dom'
import { submitForm, FormState } from '@/app/actions'

const initialState: FormState = {
  errors: {},
  message: "",
}

const PlayfulContactForm: React.FC = () => {
    const [state, formAction] = useFormState(submitForm, initialState)
    const [isDrawing, setIsDrawing] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  
    useEffect(() => {
      const resizeCanvas = () => {
        if (canvasRef.current && containerRef.current) {
          const canvas = canvasRef.current
          const container = containerRef.current
          const scale = window.devicePixelRatio
          canvas.width = container.offsetWidth * scale
          canvas.height = 150 * scale
          canvas.style.width = `${container.offsetWidth}px`
          canvas.style.height = '150px'
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.scale(scale, scale)
          }
        }
      }
  
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)
  
      return () => {
        window.removeEventListener('resize', resizeCanvas)
      }
    }, [])
  
    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
      setIsDrawing(true)
      const { offsetX, offsetY } = e.nativeEvent
      lastPointRef.current = { x: offsetX, y: offsetY }
    }
  
    const stopDrawing = () => {
      setIsDrawing(false)
      lastPointRef.current = null
    }
  
    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing || !canvasRef.current) return
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return
  
      const { offsetX, offsetY } = e.nativeEvent
      const currentPoint = { x: offsetX, y: offsetY }
      const lastPoint = lastPointRef.current
  
      if (lastPoint) {
        ctx.beginPath()
        ctx.moveTo(lastPoint.x, lastPoint.y)
        ctx.lineTo(currentPoint.x, currentPoint.y)
        ctx.strokeStyle = 'var(--primary-500)'
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
  
        // Smooth the line
        const midPoint = midPointBtw(lastPoint, currentPoint)
        ctx.quadraticCurveTo(lastPoint.x, lastPoint.y, midPoint.x, midPoint.y)
        ctx.stroke()
      }
  
      lastPointRef.current = currentPoint
    }
  
    const midPointBtw = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      return {
        x: p1.x + (p2.x - p1.x) / 2,
        y: p1.y + (p2.y - p1.y) / 2
      }
    }
  
    const clearSignature = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d')
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        }
      }
    }
  
    const handleSubmit = async (formData: FormData) => {
      if (canvasRef.current) {
        const signatureDataUrl = canvasRef.current.toDataURL('image/png')
        // Remove the "data:image/png;base64," prefix
        const base64Data = signatureDataUrl.split(',')[1]
        formData.append('signature', base64Data)
      }
      await formAction(formData)
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
              <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
              <p className="mb-4">We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
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
                <div>
                  <label className="block text-text-700 font-bold mb-2">Signature is optional</label>
                  <div ref={containerRef} className="relative w-full">
                    <canvas
                      ref={canvasRef}
                      onMouseDown={startDrawing}
                      onMouseUp={stopDrawing}
                      onMouseOut={stopDrawing}
                      onMouseMove={draw}
                      className="border border-primary-300 rounded-lg cursor-crosshair bg-background-50"
                    ></canvas>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={clearSignature}
                      className="absolute top-2 right-2 px-2 py-1 bg-accent-500 text-text-50 rounded-md text-sm"
                    >
                      Clear
                    </motion.button>
                  </div>
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