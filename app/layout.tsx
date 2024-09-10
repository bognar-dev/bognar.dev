import '@/app/globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar/navbar';
import MotionConfigWrapper from '@/components/motion-config-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
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
      <html lang="en" suppressHydrationWarning={true} className="">
        <head />
        <body className={cn('bg-background-50 text-text-900 no-scrollbar ', fonts.madeTommyLight.className)}>

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MotionConfigWrapper>
              <div className="absolute inset-0 -z-10 min-h-full min-w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <Navbar/>
                {children}
                <Footer />
              </div>
            </MotionConfigWrapper>
          </ThemeProvider>

          <Analytics />

        </body>
      </html >
    </>
  )
}
