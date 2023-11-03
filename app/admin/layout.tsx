import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/config/site';
import '@/app/globals.css';
import MainNav from '@/components/main-nav';

import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/theme-toggle';
import { fontBody, fontHead } from '@/config/fonts';
import Link from 'next/link';
import Button from '@/components/button';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='grid grid-flow-cols grid-cols-9 gap-5'>

            {siteConfig.adminNav?.length ? (

                <nav className="flex flex-col col-span-1 gap-5 border p-4 border-accent-950">
                    {siteConfig.adminNav?.map(
                        (item, index) =>
                            item.href && (
                                
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className=
                                        "flex items-center text-sm font-medium hover:translate-x-1 hover: ease-out duration-100 rounded-md px-4 mt-1"
                                    >
                                        {item.title}
                                    </Link>
                            
                            )
                    )}
                </nav>

            ) : null}
            <div className='col-span-8'>
            {children}
            </div>
        </div>


    )
}