"use client"

import fonts from "@/config/fonts"
import { cn } from "@udecode/cn"
import { motion } from "framer-motion"
import Button from "./button"
import { Icons } from "./icons"

export default function Title() {


  return (
    <>
      <motion.h1 initial={{ x: 700 }} animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }} className={cn(' text-5xl md:text-9xl  font-semibold', fonts.madeGentle.className)}  >Bognar.dev</motion.h1>
      <motion.div initial={{ x: 700 }} animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }} className='text-xl md:text-2xl pt-5 self-center text-center'>Where Algorithms Meet Aesthetics</motion.div>
      <Button className='shadow-none flex flex-row justify-items-center justify-center group text-text-50 hover:animate-wiggle ' href="/projects">See my projects  <Icons.arrowUpRight className="w-4 h-4 ml-2 mt-0.5" /></Button>
    </>
  )
}