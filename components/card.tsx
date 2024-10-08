"use client"

import useMousePosition from "@/hooks/useMousePosition";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Blob } from "./blob";
import ScrollMotionDiv from "./scroll-motion-div";

export default function Card({ className, children, motion = false, blob = false }: { className?: string, children: React.ReactNode, motion?: boolean, blob?: boolean }) {
    const blobRef = useRef<HTMLDivElement>(null);
    const mousePosition = useMousePosition();
    const cardRef = useRef<HTMLDivElement>(null);
    const handlePointerMove = (event: React.PointerEvent) => {
        if (!cardRef.current) return;
        if (!blobRef.current) return;
        if (!mousePosition.x || !mousePosition.y) return;
        const { left, top } = cardRef.current.getBoundingClientRect();

        const posX = mousePosition.x + left;
        const posY = mousePosition.y - top;

        blobRef.current.animate(

            {
                left: `${mousePosition.x - left}px`,
                top: `${mousePosition.y - top}px`,
            },
            { duration: 100, fill: "forwards" }
        );



    };
    const handlePointerLeave = (event: React.PointerEvent) => {
        if (!cardRef.current) return;
        if (!blobRef.current) return;
        if (!mousePosition.x || !mousePosition.y) return;

        const { left, top, right, bottom } = cardRef.current.getBoundingClientRect();
        const extraPixels = 100;
        let newLeft = mousePosition.x - extraPixels;
        let newTop = mousePosition.y - extraPixels;



        blobRef.current.animate(

            {
                left: `${mousePosition.x - left}px`,
                top: `${mousePosition.y - top}px`,
            },
            { duration: 100, fill: "forwards" }
        );


    };
    const handlePointerEnter = (event: React.PointerEvent) => {
        if (!cardRef.current) return;
        if (!blobRef.current) return;
        if (!mousePosition.x || !mousePosition.y) return;

        let newLeft = mousePosition.x;
        let newTop = mousePosition.y;

        blobRef.current.animate(

            {
                left: `${newLeft}px`,
                top: `${newTop}px`,
            },
            { duration: 100, fill: "forwards" }
        );


    };
    if (motion) {
        return (
            <ScrollMotionDiv className={twMerge(className, 'overflow-hidden pt-3 w-full text-card-foreground grid bg-card  backdrop-blur-sm shadow-sm shadow-primary rounded-xl ')}>
                {children}
                {blob && <Blob blobRef={blobRef} />}
            </ScrollMotionDiv>
        )
    }
    return (
        <div onPointerMove={handlePointerMove} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave} ref={cardRef} className={twMerge(className, ' overflow-hidden pt-3 w-full text-card-foreground grid bg-card backdrop-blur-sm shadow-sm shadow-primary rounded-xl ')}>
            {children}
            {blob && <Blob blobRef={blobRef} />}
        </div>
    )
}