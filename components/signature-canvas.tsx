'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SignatureCanvasProps {
  onSignatureChange: (signatureData: string | null) => void
}

interface Touch {
  identifier: number
  clientX: number
  clientY: number
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onSignatureChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const ongoingTouchesRef = useRef<Touch[]>([])
  const offsetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.strokeStyle = '#72725a'
      }

      canvas.addEventListener('touchstart', handleStart)
      canvas.addEventListener('touchend', handleEnd)
      canvas.addEventListener('touchcancel', handleCancel)
      canvas.addEventListener('touchmove', handleMove)

      return () => {
        canvas.removeEventListener('touchstart', handleStart)
        canvas.removeEventListener('touchend', handleEnd)
        canvas.removeEventListener('touchcancel', handleCancel)
        canvas.removeEventListener('touchmove', handleMove)
      }
    }
  }, [])

  const updateOffset = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      offsetRef.current = { x: rect.left, y: rect.top }
    }
  }

  const handleStart = (evt: TouchEvent) => {
    evt.preventDefault()
    updateOffset()
    const touches = evt.changedTouches
    for (let i = 0; i < touches.length; i++) {
      ongoingTouchesRef.current.push(copyTouch(touches[i]))
    }
    setIsDrawing(true)
  }

  const handleMove = (evt: TouchEvent) => {
    evt.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const touches = evt.changedTouches

    for (let i = 0; i < touches.length; i++) {
      const idx = ongoingTouchIndexById(touches[i].identifier)
      if (idx >= 0) {
        ctx.beginPath()
        ctx.moveTo(
          ongoingTouchesRef.current[idx].clientX - offsetRef.current.x,
          ongoingTouchesRef.current[idx].clientY - offsetRef.current.y
        )
        ctx.lineTo(
          touches[i].clientX - offsetRef.current.x,
          touches[i].clientY - offsetRef.current.y
        )
        ctx.lineWidth = 2
        ctx.strokeStyle = '#72725a'
        ctx.lineJoin = 'round'
        ctx.closePath()
        ctx.stroke()

        ongoingTouchesRef.current.splice(idx, 1, copyTouch(touches[i]))
      }
    }
  }

  const handleEnd = (evt: TouchEvent) => {
    evt.preventDefault()
    const touches = evt.changedTouches
    for (let i = 0; i < touches.length; i++) {
      const idx = ongoingTouchIndexById(touches[i].identifier)
      if (idx >= 0) {
        ongoingTouchesRef.current.splice(idx, 1)
      }
    }
    if (ongoingTouchesRef.current.length === 0) {
      setIsDrawing(false)
      updateSignatureData()
    }
  }

  const handleCancel = (evt: TouchEvent) => {
    evt.preventDefault()
    const touches = evt.changedTouches
    for (let i = 0; i < touches.length; i++) {
      const idx = ongoingTouchIndexById(touches[i].identifier)
      ongoingTouchesRef.current.splice(idx, 1)
    }
    if (ongoingTouchesRef.current.length === 0) {
      setIsDrawing(false)
    }
  }

  const copyTouch = ({ identifier, clientX, clientY }: Touch): Touch => {
    return { identifier, clientX, clientY }
  }

  const ongoingTouchIndexById = (idToFind: number): number => {
    return ongoingTouchesRef.current.findIndex(touch => touch.identifier === idToFind)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        onSignatureChange(null)
      }
    }
  }

  const updateSignatureData = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const signatureData = canvas.toDataURL('image/png')
      onSignatureChange(signatureData)
    }
  }

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const { offsetX, offsetY } = e.nativeEvent
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(offsetX, offsetY)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const { offsetX, offsetY } = e.nativeEvent
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.lineTo(offsetX, offsetY)
      ctx.stroke()
    }
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
    updateSignatureData()
  }

  return (
    <div>
      <label className="block text-text-700 font-bold mb-2">Sign here</label>
      <div className="relative w-full">
        <canvas
          ref={canvasRef}
          width={300}
          height={150}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseUp}
          className="border border-primary-300 rounded-lg cursor-crosshair bg-background-50"
        />
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
  )
}

export default SignatureCanvas