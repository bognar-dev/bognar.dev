'use client'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 600 : 50;

  return (
    <main className="h-screen relative">
      <motion.div 
        className="w-full h-full flex items-center justify-center absolute bg-[#ec4e39] text-black"
        style={{ WebkitMaskImage: "url('/mask.svg')", WebkitMaskRepeat: "no-repeat" }}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.3}}
      >
          <p 
            className="w-[1000px] p-10 text-[#afa18f] text-xl md:text-4xl leading-[66px] cursor-default"
            onMouseEnter={() => {setIsHovered(true)}} 
            onMouseLeave={() => {setIsHovered(false)}}
          >
            A web developer with a passion for crafting dynamic websites and animations—where creativity meets code. Pushing boundaries while learning, working, and always aiming for innovative solutions.
          </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-xl md:text-4xl leading-[66px] cursor-default">
        <p>I&apos;m a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>

    </main>
  )
}