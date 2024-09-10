'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button/Button';
import Nav from './Nav/nav';
import { siteConfig } from '@/config/site';

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="fixed right-12 top-12 z-20">
            <motion.div 
                className="relative w-[480px] h-[650px] bg-primary-300 rounded-md"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav items={siteConfig.mainNav} footerLinks={siteConfig.socialLinks} />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}
