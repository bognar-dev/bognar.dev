"use client"

import fonts from "@/config/fonts"
import { cn } from "@udecode/cn"
import { motion } from "framer-motion"

export default function Title() {


  return (
    <>
      <motion.h1 initial={{x:700}} animate={{ x: 0 }}
  transition={{ type: "spring", stiffness: 100 , damping:15}} className={cn(' text-5xl md:text-9xl  font-semibold', fonts.madeGentle.className)}  >Bognar.dev</motion.h1>
      <div className='text-xl md:text-2xl pt-5 self-center text-center'>Where Algorithms Meet Aesthetics</div>
    </>
  )
}