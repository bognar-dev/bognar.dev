'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimensions";


const BIG_SIZE = 100;
const SMALL_SIZE = 10;
const PER_PX = 0.3;

function Dot({ mousePos }: { mousePos: { x: number; y: number } }) {
    const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 });

    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!dotRef.current) return;
        const { x, y } = mousePos;
        const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

        const distance = Math.sqrt(
            Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2)
        );

        size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
    }, [mousePos, size]);

    return (
        <div ref={dotRef} className="relative">
            <motion.div
                className="bg-accent-600 rounded-full absolute -translate-x-1/2 -translate-y-1/2"
                style={{ width: size, height: size }}
            ></motion.div>
        </div>
    );
}

export default function BGBalls({ children }: { children: React.ReactNode }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


    const numRows = 6; // Adjust as needed
    const numCols = 13; // Adjust as needed
    const numBalls = numRows * numCols;

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handler);

        return () => {
            window.removeEventListener('mousemove', handler);
        };
    }, []);

    return (
        <div className="container min-h-100% min-w-full md:min-w-min mx-auto relative ">
            <div className="flex flex-wrap gap-10 md:gap-24 mx-auto p-12">
                {Array.from({ length: numBalls }, (_, i) => (
                    <Dot key={i} mousePos={mousePos}></Dot>
                ))}
            </div>
            <div className="w-1/2 h-1/2 absolute top-1/4 left-1/4 flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
}