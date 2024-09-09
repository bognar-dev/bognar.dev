"use client"

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@udecode/cn";
import fonts from "@/config/fonts";

export default function Component() {

    return (
        <footer

            className='relative h-[400px] bg-primary-300'

            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}

        >

            <div className='relative h-[calc(100vh+400px)] -top-[100vh]'>

                <div className='h-[400px] sticky top-[calc(100vh-400px)] flex flex-col justify-between items-center py-4'>
                    
                    <div className="flex space-x-4">
                        {Object.entries(siteConfig.links).map(([key, { url, icon: Icon }]) => (
                            <Link key={key} className="text-text-800 hover:text-text-500 hover:animate-wiggle" href={url}>
                                <Icon className="h-16 w-16 fill-none" />
                            </Link>
                        ))}
                    </div>
                    <p className={cn("text-3xl md:text-8xl",fonts.madeTommyBlackOutline.className)}>© {new Date().getFullYear()} Bognar.dev</p>
                </div>

            </div>
        </footer>
    );
}
