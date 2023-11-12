"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Icons } from "./icons"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();


    return (

        <button className="border bg-accent-200 border-accent-200  rounded-lg p-2 hover:bg-accent-500 hover:border-accent-500 ease-in duration-100 ml-1 z-10"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>

            {theme == "light" ? <Icons.sun /> :
                <Icons.moon />}
        </button>
    )
}

