"use client"

import fonts from "@/config/fonts"
import { cn } from "@udecode/cn"
import { motion } from "framer-motion"
import Button from "./button"
import { Icons } from "./icons"
import { ParallaxText } from "./parralax-scroll"

export default function Title() {


  return (
    <div className="">
      <ParallaxText baseVelocity={5} >Bognar.dev</ParallaxText>
      <ParallaxText baseVelocity={-5} >Bognar.dev</ParallaxText>
      
    </div>
    
  )
}