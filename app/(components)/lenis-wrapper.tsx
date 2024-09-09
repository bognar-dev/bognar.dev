"use client"

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {

        const lenis = new Lenis()



        function raf(time: any) {

            lenis.raf(time)

            requestAnimationFrame(raf)

        }



        requestAnimationFrame(raf)

    }, [])

    return (
        <>
            {children}
        </>
    );
}