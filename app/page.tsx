import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
import Button from '@/components/button'
import Link from 'next/link'
import profile from '@/public/profile.jpg'
import { Accordion, AccordionTitle, AccordionItem, AccordionItemTitle, AccordionItemBody, AccordionItemButton } from '@/components/accordion'
import { siteConfig } from '@/config/site'
import Socials from '@/components/socials'
import TechStack from '@/components/techstack'
import Title from '@/components/title'
import About from '@/components/about'
import Newsletter from '@/components/newsletter'
import ScrollMotionDiv from '@/components/scroll-motion-div'



export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-center items-center font-body  px-5 w-full gap-5">
      <BGBalls>
        <Title />
        <Button className='shadow-none hover:scale-110 text-text-50 md:scale-125' href="/projects">See my projects</Button>
        <div className='grid grid-cols-1 gap-5'>
          <div className='grid gap-5 grid-rows-1 md:grid-cols-4 md:grid-flow-row w-full'>
     
            <Card motion={true} className='p-5 md:col-span-3'>
              <About />
            </Card>
            
            <Socials motion={true} className='md:col-span-1' />


          </div>
          <div className='grid gap-5  grid-cols-1 xl:grid-cols-4 xl:grid-rows-4 xl:grid-flow-row w-full '>
            <Card motion={true} className='xl:row-span-4'>
              <TechStack />
            </Card>
            <Card motion={true} className='xl:row-span-4 xl:col-span-3'>
              Recent Blogposts
            </Card>
          </div>

        </div>
        <Timeline/>
        
          
        {/* <div className='flex gap-5 flex-col lg:flex-row w-full'>
          <Card className='h-[300px]'>
            Recent projects
          </Card>

        </div> */}
      </BGBalls>
    </main>
  )
}
