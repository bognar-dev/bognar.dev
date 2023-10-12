"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Icons } from "./icons"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();


    return (
    
            <button className="border border-accent-200  rounded-lg p-2 hover:border-accent-400"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>

                {theme == "light" ? <Icons.sun/>:
                <Icons.moon/>}
            </button>
    )
}

