import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {siteConfig } from '@/config/site';
import '@/app/globals.css';
import MainNav from '@/components/main-nav';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MainNav items={siteConfig.mainNav}/>
        {children}
        </body>
    </html>
  )
}
