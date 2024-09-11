"use client"
import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FramerProps {
    children: ReactNode;
    className?: string;
}

export default function Magnetic({children, className}: FramerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        console.log(height, width, left, top)
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
        
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            className={cn("flex items-center justify-center", className)}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 200, damping: 20, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}