'use client';
import { siteConfig } from '@/config/site';
import useWindow from '@/hooks/useWindow';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button/Button';
import Nav from './Nav/nav';


export default function Navbar() {

    const useResponsiveMenu = () => {

        const { dimension } = useWindow();
        const isSmallScreen = dimension.width <= 768; // Example breakpoint for small screens

        return {
            open: {
                width: isSmallScreen ? "200px" : "480px",
                height: isSmallScreen ? "400px" : "400px",
                top: isSmallScreen ? "-15px" : "-25px",
                right: isSmallScreen ? "-15px" : "-25px",
                transition: {
                    duration: 0.6,
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    mass: 0.5,
                    ease: [0.76, 0, 0.24, 1]
                }
            },
            closed: {
                width: isSmallScreen ? "80px" : "96px",
                height: isSmallScreen ? "35px" : "40px",
                top: "0px",
                right: "0px",
                transition: { duration: 0.5, delay: 0.1, type: "linear", ease: [0.76, 0, 0.24, 1] }
            }
        };
    };

    // Usage
    const menu = useResponsiveMenu();

    const [isActive, setIsActive] = useState(true);

    return (
        <div className="fixed top-6 right-6 md:right-12 md:top-12 z-20 text-background dark:text-foreground">
            <motion.div
                className="relative w-24 h-10 bg-primary rounded-md"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav items={siteConfig.mainNav} footerLinks={siteConfig.socialLinks} />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
        </div>
    )
}
