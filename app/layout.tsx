import '@/app/globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar/navbar';
import MotionConfigWrapper from '@/components/motion-config-wrapper';
import LenisWrapper from '@/components/lenis-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import fonts from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { cn } from "@udecode/cn";
import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';
import ThemeToggle from '@/components/theme-toggle';
import Magnetic from '@/components/Magnetic';
import { Providers } from './providers';
import thunder from '@/config/thunder/thunder';


export const metadata: Metadata = {
  metadataBase: new URL('https://bognar.co.uk'),
  title: {
    default: 'Niklas Bognar | CompSci Student - Web enthusiast',
    template: '%s | Niklas Bognar'
  },
  description: 'Personal portfolio of Niklas Bognar, a Full Stack Developer specializing in React, Next.js, and Node.js.',
  openGraph: {
    siteName: 'Niklas Bognar Portfolio',
    type: 'website',
    locale: 'en_GB',
    url: 'https://bognar.co.uk',
    images: [
      {
        url: 'https://bognar.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Niklas Bognar - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@niklasbognar',
    creator: '@niklasbognar'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://bognar.co.uk',
    types: {
      'application/rss+xml': 'https://bognar.co.uk/rss.xml',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Niklas Bognar",
    "url": "https://bognar.co.uk",
    "sameAs": [
      "https://twitter.com/nikibgnr",
      // Add other social media profiles if available
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-employed"
    },
    "description": "Full Stack Developer specializing in React, Next.js, and Node.js.",
    "image": "https://bognar.co.uk/og-image.jpg",
    "alumniOf": {
      "@type": "Falmouth University",
      "name": "Falmouth Uni" // Replace with actual university name
    },
    "knowsAbout": ["React", "Next.js", "Node.js", "Web Development"],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bognar.co.uk"
    }
  };
  return (
    <>
      <html lang="en" suppressHydrationWarning={true} className="">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={cn(' text-foreground font-normal no-scrollbar ', thunder.className)}>
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <LenisWrapper className=''>
                <MotionConfigWrapper>
                  <Magnetic className='z-10 absolute top-4 left-4 md:top-12 md:left-12'>
                    <ThemeToggle className='w-20 h-20 ' />
                  </Magnetic>
                  <Navbar />
                  {children}
                  <Footer />
                </MotionConfigWrapper>
              </LenisWrapper>
            </ThemeProvider>
          </Providers>
          <Analytics />

        </body>
      </html >
    </>
  )
}
