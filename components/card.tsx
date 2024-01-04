"use client"

import { twMerge } from "tailwind-merge"
import ScrollMotionDiv from "./scroll-motion-div"
import { Blob } from "./blob"
import { useRef } from "react";
import  useMousePosition  from "@/hooks/useMousePosition"

export default function Card({ className, children, motion = false,blob = false }: { className?: string, children: React.ReactNode, motion?: boolean,blob?:boolean }) {
    const blobRef = useRef<HTMLDivElement>(null);
     const mousePosition = useMousePosition();
    const cardRef = useRef<HTMLDivElement>(null);
    const handlePointerMove = (event: React.PointerEvent) => {
        if (!cardRef.current) return;
        if (!blobRef.current) return;
        if (!mousePosition.x || !mousePosition.y) return;
        const { left, top } = cardRef.current.getBoundingClientRect();

        const posX = mousePosition.x - left;
        const posY = mousePosition.y - top;
        console.log(`${mousePosition.x - left}px ${mousePosition.y - top }px`)
        if (blobRef.current) {
            blobRef.current.animate(

                {
                    left: `${mousePosition.x - left}px`,
                    top: `${mousePosition.y - top }px`,
                },
                { duration: 100, fill: "forwards" }
            );
          }
      };
    if (motion) {
        return (
            <ScrollMotionDiv className={twMerge(className, 'overflow-hidden pt-3 w-full text-card-foreground grid bg-background-50  backdrop-blur-sm shadow-sm shadow-primary-400 rounded-xl ')}>
                {children}
                {blob && <Blob blobRef={blobRef} />}
            </ScrollMotionDiv>
        )
    }
    return (
        <div onPointerMove={handlePointerMove} ref={cardRef} className={twMerge(className, ' overflow-hidden pt-3 w-full text-card-foreground grid bg-background-50 backdrop-blur-sm shadow-sm shadow-primary-400 rounded-xl ')}>
            {children}
            {blob && <Blob blobRef={blobRef} />}
        </div>
    )
}