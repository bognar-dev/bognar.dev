import ContactForm from '@/components/contactform'
import { PageWrapper } from '@/components/page-wrapper'
import SignatureForm from '@/components/signature-form'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Niklas Bognar for collaboration or inquiries.',
}
export default function Home() {
  return (
    <PageWrapper>
      <main className=" min-h-screen flex flex-col justify-center items-center gap-8 pt-20">
        <ContactForm/>
        <SignatureForm />
      </main>
    </PageWrapper>
  )
}
