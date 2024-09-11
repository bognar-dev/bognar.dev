'use client'

import { motion } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'

interface SignatureCanvasProps {
    onSignatureChange: (signatureData: string | null) => void
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onSignatureChange }) => {
    const [isDrawing, setIsDrawing] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const lastPointRef = useRef<{ x: number; y: number } | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
                ctx.lineWidth = 2
                ctx.lineCap = 'round'
                ctx.strokeStyle = 'black'
            }
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
        updateSignatureData()
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

    return (

        <div>
            <label className="block text-text-700 font-bold mb-2">Sign Here</label>
            <div className="relative w-full">
                <canvas className="border border-primary-300 rounded-lg cursor-crosshair bg-background-50" >
                </canvas>
                <button type="button" className="absolute top-2 right-2 px-2 py-1 bg-accent-500 text-text-50 rounded-md text-sm" >Clear</button>
            </div>
        </div>
    )
}

export default SignatureCanvas