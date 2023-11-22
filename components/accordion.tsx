"use client"


import { siteConfig } from '@/config/site';
import Link from 'next/link';
import React, { useState } from 'react';
import { Icons } from './icons';
import { twMerge } from 'tailwind-merge';

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





function AccordionItem({ itemTitle, accordionItemContent, accordionItemButton }: { itemTitle: React.ReactNode, accordionItemContent: React.ReactNode, accordionItemButton: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={` text-text-900 main-1 pt-4 sm:pt-6  mb-5 px-4 rounded-lg flex flex-row items-start gap-4 transition-all duration-500 border-b ${isExpanded ? 'bg-accent-200 pb-8' : 'border-accent-300'}`}>
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
        </div>
    );
}

function Accordion({ children,className }: { children: React.ReactNode ,className?:string}) {
    return (
        <div className={twMerge("w-max p-8 gap-4 items-center justify-center bg-accent-100 shadow-sm shadow-accent-400 rounded-lg ",className)}>
           {children}
        </div>
    );
}


export { Accordion, AccordionItem, AccordionTitle, AccordionItemBody,AccordionDescription,AccordionItemTitle, AccordionItemContent ,AccordionItemButton}
