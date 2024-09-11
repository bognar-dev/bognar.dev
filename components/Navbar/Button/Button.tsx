import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
    isActive: boolean;
    toggleMenu: () => void;
}

interface PerspectiveTextProps {
    label: string;
}

const Button = ({ isActive, toggleMenu }: ButtonProps) => {
    return (
        <div className="absolute top-0 right-0 w-24 h-10 cursor-pointer rounded-md overflow-hidden">
            <motion.div
                className="relative w-full h-full"
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className="w-full h-full bg-primary-300 hover:rotate-x-90"
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label="Menu" />
                </div>
                <div
                    className="w-full h-full bg-black text-primary bg-primary-300 hover:rotate-x-90"
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>
    )
}

const PerspectiveText = ({ label }: PerspectiveTextProps) => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full transform-style-3d transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)]">
            <p className="transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase">{label}</p>
            <p className="absolute transform-origin-bottom-center transform rotate-x-[-90deg] translate-y-[9px] opacity-0 transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase">{label}</p>
        </div>
    )
}

export default Button;
