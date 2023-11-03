import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import {siteConfig } from '@/config/site';
import '@/app/globals.css';
import MainNav from '@/components/main-nav';

import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/theme-toggle';
import { fontBody, fontHead } from '@/config/fonts';
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
export const viewport:Viewport = {
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
    <>
      <html lang="en" suppressHydrationWarning className={fontBody.className}>
        <head />
        <body className='bg-background-100 text-text-900'>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MainNav items={siteConfig.mainNav} />
            <ThemeToggle />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
