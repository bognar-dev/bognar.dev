
"use client"
import { twMerge } from "tailwind-merge";
import { Icons } from "./icons";
import { motion } from "framer-motion";
interface TagProps {
    tag: string;
    colour: string;
    className?: string;
    onClick?: () => void;
    animate?: boolean;
    index: number;
}

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: 100,
    },
    exit: (index: number) => ({
        opacity: 0,
        x: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
    animate: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};



const Tag = ({ tag, colour, className, onClick, animate = false,index }: TagProps) => (
    animate ? (
        < motion.li
            onClick={onClick}
            className={twMerge(` cursor-pointer flex items-center flex-auto flex-shrink justify-center mb-3 text-sm bg-${colour} rounded-sm px-2 gap-1 text-background`, className)}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            custom={index}
        >
            <Icons.tag className="shrink-0"/>
            <span>{tag}</span>
        </motion.li >
    ) : (
        <li onClick={onClick} className={twMerge(`flex items-center flex-auto flex-shrink justify-center mb-3 text-sm bg-${colour} rounded-sm px-2 gap-1 text-background`, className)}>
            <Icons.tag className="shrink-0"/>
            <span>{tag}</span>
        </li>
    )
);

export default Tag;