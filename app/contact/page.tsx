import ContactForm from '@/components/contactform'
import { PageWrapper } from '@/components/page-wrapper'
import Socials from '@/components/socials'
export default function Home() {
  return (
    <PageWrapper>
      <main className="flex flex-col justify-center items-center">
        <ContactForm/>

      </main>
    </PageWrapper>
  )
}
