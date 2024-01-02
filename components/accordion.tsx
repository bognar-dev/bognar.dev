"use client"


import { siteConfig } from '@/config/site';
import Link from 'next/link';
import React, { useState } from 'react';
import { Icons } from './icons';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence , motion } from 'framer-motion';
import { MotionDiv } from './motion-div';

function AccordionItemTitle({ children,className }: { children: React.ReactNode,className?:string }){
    return(
        <h2 className={twMerge("text-sm mt-0.5",className)}>{children}</h2>
    )
}

function AccordionTitle({ children,className }: { children: React.ReactNode,className?:string }) {
    return (
        <h1 className={twMerge("text-xl uppercase first-letter:text-3xl  mb-2 ",className)}>{children}</h1>
    )
}
function AccordionDescription({ children,className }: { children: React.ReactNode,className?:string }) {
    return (
        <p className={twMerge("text-xs leading-relaxed" ,className)}>{children}</p >
    )
}
function AccordionItemBody({ children,className }: { children: React.ReactNode,className?:string }) {
    return (
        <p className={twMerge("text-xs leading-relaxed my-5",className)}>{children}</p>
    )
}


function AccordionItemButton({ children,href,className }: { children: React.ReactNode,href:string,className?:string }) {
    return (
        <Link href={href} rel="noopener noreferrer" target="_blank" className={twMerge("text-xs sm:text-sm font-medium text-text-900 py-1 px-3 sm:py-2 sm:px-8 rounded-3xl bg-primary-500 mt-10 shadow-sm shadow-primary-200 hover:shadow-primary-500 transition-all",className)}>{children}</Link>
    )
}
function AccordionItemContent({ children, isExpanded }: { children: React.ReactNode, isExpanded: boolean }) {
    return (
        <div className={`content-1 ${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-top-left transition-all duration-500`}>
           {children}
        </div>
    )
}


const fadeInAnimationVariants = {
    initial: {
        opacity: 0.1,
        y: 10,
        x: 10
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        x:0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


function AccordionItem({ index,itemTitle, accordionItemContent, accordionItemButton }: { index:number,itemTitle: React.ReactNode, accordionItemContent: React.ReactNode, accordionItemButton: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        
        <motion.li className={` text-text-900 main-1 pt-4 sm:pt-6  mb-5 px-4 rounded-lg flex flex-row items-start gap-4 transition-all duration-500 border-b ${isExpanded ? 'bg-primary-200 pb-8' : 'border-primary-300'}`}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
                custom={index}>
            <div className="btn-content" data-tab="1" onClick={toggleAccordion}>
               {isExpanded?<Icons.circleMinus/>:<Icons.circlePlus/>}
            </div>
            <div className={`flex-grow ${isExpanded ? 'h-auto' : 'h-12'} overflow-visible transition-all duration-500`} onClick={toggleAccordion}>
                {itemTitle}
            
            <div className={`content-1 ${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-top-left transition-all duration-500`}>
                {accordionItemContent}
                {accordionItemButton}
            </div>
            </div>
        </motion.li>
    );
}

function Accordion({ children,className }: { children: React.ReactNode ,className?:string}) {
    return (
        <AnimatePresence>
        <ul className={twMerge("w-max p-8 gap-4 items-center justify-center bg-primary-100 shadow-sm shadow-primary-400 rounded-lg ",className)}>
           {children}
        </ul>
        </AnimatePresence>
    );
}


export { Accordion, AccordionItem, AccordionTitle, AccordionItemBody,AccordionDescription,AccordionItemTitle, AccordionItemContent ,AccordionItemButton}
