"use client"

import fonts from "@/config/fonts"
import { cn } from "@udecode/cn"
import { motion } from "framer-motion"
import Button from "./button"
import { Icons } from "./icons"
import { ParallaxText } from "./parralax-scroll"

export default function Title() {


  return (
    <div className={cn(fonts.neueMachinaBold.className,'w-full overflow-hidden')}>
      <ParallaxText baseVelocity={1} childCount={10} >Bognar.dev</ParallaxText>
      <ParallaxText baseVelocity={-1} childCount={10} >Bognar.dev</ParallaxText>
      
    </div>
    
  )
}