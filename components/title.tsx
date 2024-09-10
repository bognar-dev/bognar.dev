"use client"

import fonts from "@/config/fonts"
import { cn } from "@udecode/cn"
import { ParallaxText } from "./parralax-scroll"

export default function Title({ className }: { className?: string }) {


  return (
    <div className={cn(fonts.madeTommyBlack.className,'w-full overflow-hidden flex flex-col justify-center items-center',className)}>
      <ParallaxText baseVelocity={1} childCount={10} >Bognar.dev</ParallaxText>
      <ParallaxText baseVelocity={-1} childCount={10} >Bognar.dev</ParallaxText>
      
    </div>
    
  )
}