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
    <main className="flex min-h-screen min-w-full flex-col  bg-background-100 px-20 w-full">
      <BGBalls>
        <h1 className=' text-5xl md:text-9xl text-bold'>Bognar.dev</h1>
        <div className='text-xl md:text-2xl pt-5'>Where Algorithms Meet Aesthetics</div>
        <Button className='shadow-none hover:scale-110 text-text-100'><Link href="/projects">See my projects</Link></Button>
      </BGBalls>
      <div className='flex gap-10 flex-col lg:flex-row w-full'>
        <Card>

          <h1 className='text-3xl text-center first-letter:text-4xl'>Recent Projects</h1>
          
         

        </Card>
        <div className='grid grid-flow-row gap-4'>
        <Accordion className=''>
        <AccordionTitle>Contact</AccordionTitle>
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
      </Accordion>
      <Socials/>
      </div>
        
      </div>
    </main>
  )
}
