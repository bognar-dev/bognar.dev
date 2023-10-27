import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
import Button from '@/components/button'
import Link from 'next/link'
import { Accordion, AccordionTitle, AccordionItem, AccordionItemTitle, AccordionItemBody, AccordionItemButton } from '@/components/accordion'
import { siteConfig } from '@/config/site'
import Socials from '@/components/socials'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-center items-center font-body  bg-background-100 px-5 md:px-20 w-full gap-10">
      <BGBalls>
        <h1 className=' text-5xl md:text-9xl '>Bognar.dev</h1>
        <div className='text-xl md:text-2xl pt-5'>Where Algorithms Meet Aesthetics</div>
        <Button className='shadow-none hover:scale-110 text-text-50'><Link href="/projects">See my projects</Link></Button>
      </BGBalls>
      <div className='flex gap-10 flex-col lg:flex-row w-full'>
        <Card>

          <h1 className='text-3xl text-center first-letter:text-4xl'>Recent Projects</h1>



        </Card>
        <Socials />

      </div>
    </main>
  )
}
