import '@/app/globals.css';
import Footer from '@/app/(components)/footer';
import MainNav from '@/app/(components)/main-nav';
import MotionConfigWrapper from '@/app/(components)/motion-config-wrapper';
import { ThemeProvider } from '@/app/(components)/theme-provider';
import fonts from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { cn } from "@udecode/cn";
import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';

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
    <>
      <html lang="en" suppressHydrationWarning={true} className="no-scrollbar ">
        <head />
        <body className={cn('bg-background-50 text-text-900 ', fonts.neueMachina.className)}>

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MotionConfigWrapper>
              <MainNav items={siteConfig.mainNav} />
                {children}
              <Footer />
            </MotionConfigWrapper>
          </ThemeProvider>

          <Analytics />

        </body>
      </html >
    </>
  )
}
