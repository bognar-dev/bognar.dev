import ContactForm from '@/components/contactform'
import { PageWrapper } from '@/components/page-wrapper'
import SignatureForm from '@/components/signature-form'
import SignatureGallery from '@/components/signature-gallery'
import Socials from '@/components/socials'
export default function Home() {
  return (
    <PageWrapper>
      <main className=" min-h-screen flex flex-col justify-center items-center gap-8">
        <ContactForm/>
        <SignatureForm />
      </main>
    </PageWrapper>
  )
}
