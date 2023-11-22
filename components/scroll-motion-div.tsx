"use client"

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge"
import { MotionDiv } from "./motion-div";

export default function ScrollMotionDiv({children,className }:{ children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0.3, 1], [0.95, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <MotionDiv  ref={ref}
        className={className}
        style={{
            scale: scaleProgess,
            opacity: opacityProgess,
        }}>
            {children}
        </MotionDiv>
    )
}