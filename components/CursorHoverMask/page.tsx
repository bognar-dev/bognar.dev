'use client'
import styles from './page.module.scss'
import { ReactNode, useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

export default function CursorHoverMask() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 1000 : 50;

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
          A <span>web developer</span> with a passion for crafting dynamic websites and animations—where creativity meets code. Pushing boundaries while learning, working, and always aiming for innovative solutions.
          </p>
      </motion.div>

      <div className={styles.body}>
      <p>I&apos;m a <span>multi-skilled</span> Computer Science student, combining embedded systems knowledge with front-end magic to deliver powerful, responsive, and engaging digital experiences.</p>
      </div>

    </main>
  )
}