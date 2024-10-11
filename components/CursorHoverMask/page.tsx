'use client'
import styles from './page.module.scss'
import { ReactNode, useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';
import useWindow from '@/hooks/useWindow';

export default function CursorHoverMask() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const { dimension} = useWindow();
  const isSmallScreen = dimension.width <= 768;
  const size = isHovered ? (isSmallScreen ? 500 : 600) : (isSmallScreen ? 25 : 50);
  
  return (
    <main className={styles.main}>
     
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
         
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          A 3rd Year <span>Computer Science</span> Student at Falmouth University
          </p>
      </motion.div>

      <div className={styles.body}>
      <p>Web <span>Enthusiast</span> With A Passion For <span>Dynamic</span> Websites</p>
      </div>
      

    </main>
  )
}