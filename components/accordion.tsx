"use client"


import { siteConfig } from '@/config/site';
import Link from 'next/link';
import React, { useState } from 'react';
import { Icons } from './icons';
import { twMerge } from 'tailwind-merge';

function AccordionItemTitle({ children }: { children: React.ReactNode }){
    return(
        <h2 className="text-sm align-middle font-medium mt-0.5">{children}</h2>
    )
}

function AccordionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-xl font-medium mb-2">{children}</h1>
    )
}
function AccordionDescription({ children }: { children: React.ReactNode }) {
    return (
        <p className = "text-xs leading-relaxed" >{children}</p >
    )
}
function AccordionItemBody({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xs leading-relaxed my-5">{children}</p>
    )
}


function AccordionItemButton({ children,href }: { children: React.ReactNode,href:string }) {
    return (
        <Link href={href} className="text-xs sm:text-sm font-medium text-text-900 py-1 px-3 sm:py-2 sm:px-8 rounded-3xl bg-primary-500 mt-10 shadow-sm shadow-primary-200 hover:shadow-primary-500 transition-all">{children}</Link>
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
        <div className={` text-text-900 main-1 pt-4 sm:pt-6  mb-5 px-4 rounded-lg flex flex-row items-start gap-4 transition-all duration-500 border-b ${isExpanded ? 'bg-background-200 pb-8' : 'border-background-300'}`}>
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
        <div className={twMerge("w-max p-8 gap-4  bg-background-50 shadow-sm shadow-background-400 rounded-lg ",className)}>
           {children}
        </div>
    );
}


export { Accordion, AccordionItem, AccordionTitle, AccordionItemBody,AccordionDescription,AccordionItemTitle, AccordionItemContent ,AccordionItemButton}
