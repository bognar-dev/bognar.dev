"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Icons } from "./icons"
import { cn } from "@udecode/cn"

const variants = {
    initial: { opacity: 0, scale: 0.5, x: 0, rotate: -90 },
    animate: { opacity: 1, scale: 1, x: 0, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, x: 0, rotate: 90 }
};

export default function ThemeToggle({className}:{className?:string}) {
    const { theme, setTheme } = useTheme();

    return (
        <motion.button
            className={cn("group rounded-lg hover:bg-primary-100 ease-in duration-100 z-10", className)}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            initial="initial"
            name="Toggle Theme"
            aria-label="Toggle Theme"
            title="Toggle Theme"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        >
            <Icons.lightbulbToggle theme={theme === "light"} />
        </motion.button>
    );
}
