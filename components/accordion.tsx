"use client"

import { siteConfig } from '@/config/site';
import Link from 'next/link';
import React, { useState } from 'react';

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
        <Link href={href} className="text-sm font-medium text-text-900 py-2 px-8 rounded-3xl bg-primary-500 mt-10 shadow-sm shadow-primary-200 hover:shadow-primary-500 transition-all">{children}</Link>
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
        <div className={`text-text-900 main-1 pt-4 sm:pt-6 pb-8 mb-5 px-4 rounded-lg flex flex-col sm:flex-row items-start gap-4 transition-all duration-500 border-b ${isExpanded ? 'bg-background-200' : 'border-background-300'}`}>
            <div className="btn-content" data-tab="1" onClick={toggleAccordion}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-5 h-5 cursor-pointer btn btn-plus-1 bg-accent-300 rounded-full text-text-900 ${isExpanded ? 'hidden' : ''}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15 " />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 p-1 bg-accent-300 rounded-full cursor-pointer ${isExpanded ? '' : 'hidden'}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
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

function Accordion({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-[24rem] sm:w-[30rem] p-8 gap-4  bg-background-50 shadow-sm shadow-background-400 rounded-lg ">
           {children}
        </div>
    );
}


export { Accordion, AccordionItem, AccordionTitle, AccordionItemBody,AccordionDescription,AccordionItemTitle, AccordionItemContent ,AccordionItemButton}
