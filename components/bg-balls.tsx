'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { MotionDiv } from "./motion-div";
import { useMediaQuery } from "react-responsive";


const BIG_SIZE = 50;
const SMALL_SIZE = 3;
const PER_PX = 0.3;

function Dot({ reactive, mousePos }: { reactive:boolean,mousePos: { x: number; y: number } }) {
    const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 });
    const [isVisible, setIsVisible] = useState(false);
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
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { rootMargin: '0px', threshold: 0.5 } // You can adjust the threshold as needed
        );

        if (dotRef.current) {
            observer.observe(dotRef.current);
        }

        return () => {
            if (dotRef.current) {
                observer.unobserve(dotRef.current);
            }
        };
    }, []);
    if( reactive === false){
        return (
            <div ref={dotRef}>
                {isVisible && (

                    <MotionDiv
                        className="bg-accent-600 rounded-full absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ width: SMALL_SIZE, height: SMALL_SIZE }}
                    ></MotionDiv>
                )}
            </div>
        );
    }
    return (
        <div ref={dotRef}>
            {isVisible && (

                <MotionDiv
                    className="bg-accent-600 rounded-full absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ width: size, height: size }}
                ></MotionDiv>
            )}
        </div>
    );
}

export default function BGBalls({ children }: { children: React.ReactNode }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const isMobile = useMediaQuery({ query: '(min-width: 700px)' });


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
        <div className="container min-h-100% min-w-full justify-center items-center relative mb-12">
            <div className="absolute flex flex-grow flex-wrap gap-12 md:gap-24 mx-auto min-w-full top-1  justify-center items-center -z-10">
                
                {isMobile?Array.from({ length: 100 }, (_, i) => (
                    <Dot reactive={true} key={i} mousePos={mousePos}></Dot>
                )):
                    Array.from({ length: 100 }, (_, i) => (
                        <Dot reactive={false }key={i} mousePos={mousePos}></Dot>
                    )) }
            </div>
            <div className=" gap-5 flex flex-col justify-items-center w-full items-center">
                {children}
            </div>
        </div>
    );
}