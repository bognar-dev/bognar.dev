import '@/app/globals.css'
import { Metadata, Viewport } from 'next'
import fonts from '@/config/fonts'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://bognar.dev'),
  title: { default: 'Niklas Bognar — Cybersecurity Sales', template: '%s | Niklas Bognar' },
  description: 'Niklas Bognar is an Enterprise BDR at Proofpoint with a background in computer science, focused on cybersecurity, data security, and AI governance.',
  openGraph: { title: 'Niklas Bognar — Cybersecurity Sales', description: 'Protect people. Secure data. Govern AI.', type: 'website', url: 'https://bognar.dev' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#101318', colorScheme: 'dark' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Niklas Bognar', url: 'https://bognar.dev', jobTitle: 'Enterprise Business Development Representative DACH', worksFor: { '@type': 'Organization', name: 'Proofpoint' }, knowsAbout: ['Cybersecurity', 'Data Security', 'AI Governance', 'Business Development', 'Computer Science'], sameAs: ['https://www.linkedin.com/in/niklas-bogn%C3%A1r-503987243/', 'https://github.com/bognar-dev'],
  }
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head><body className={fonts.inter.className}><Providers>{children}</Providers></body></html>
}
