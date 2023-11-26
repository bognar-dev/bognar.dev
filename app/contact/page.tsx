import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline-event'
import { Accordion, AccordionItem, AccordionTitle, AccordionItemBody, AccordionDescription, AccordionItemTitle, AccordionItemButton } from '@/components/accordion'
import { siteConfig } from '@/config/site'
import Socials from '@/components/socials'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col px-5 md:px-20 w-full">
      <Socials className='min-w-full'/>

    </main>
  )
}
