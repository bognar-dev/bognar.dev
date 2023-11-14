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
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-center items-center font-body  px-5 w-full gap-5">
      <BGBalls>
        <h1 className=' text-5xl md:text-9xl '>Bognar.dev</h1>
        <div className='text-xl md:text-2xl pt-5'>Where Algorithms Meet Aesthetics</div>
        <Button className='shadow-none hover:scale-110 text-text-50'><Link href="/projects">See my projects</Link></Button>
        <div className='grid grid-rows-1 gap-5'>
          <div className='flex gap-5 flex-col lg:flex-row w-full'>
            <Card className='p-5'>
              <h1 className='text-3xl text-center first-letter:text-4xl'>About me</h1>
              <div className='flex flex-col md:flex-row gap-3 items-center justify-center'>
                <Image className='rounded-xl w-20 h-20 md:w-40 md:h-40' src={profile} width={800} height={800} alt='profile-pic'></Image>
                <p className='break-words'>Hey there! I'm Niklas, a down-to-earth person with roots in Germany. I've got a passion for cooking – not the fancy, over-the-top kind, but the practical, everyday recipes that make life a bit tastier.

                  When I'm not in the kitchen, you'll find me sweating it out on the squash court, riding the waves while surfing, or enjoying a game of cricket. Sports are my way of staying active and having a good time.

                  Professionally, I'm into the tech world. I like turning ideas into user-friendly interfaces. Frontend design is my thing, and I enjoy creating digital spaces that are not just visually appealing but also easy to navigate.</p>
              </div>
            </Card>
            <Socials />


          </div>
          <Card>
            <TechStack />
          </Card>
        </div>
      </BGBalls>
    </main>
  )
}
