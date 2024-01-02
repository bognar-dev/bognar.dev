import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
import Button from '@/components/button'
import Socials from '@/components/socials'
import TechStack from '@/components/techstack'
import Title from '@/components/title'
import About from '@/components/about'
import LatestProjects from '@/components/latest-projects'
import { Icons } from '@/components/icons'
import InfiniteScroll from '@/components/infinitescroll'



export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-start items-start font-body  px-5 w-full gap-5">
      <BGBalls>
        <Title />
        <Button className='shadow-none flex flex-row justify-items-center justify-center group text-text-50 ' href="/projects">See my projects  <Icons.arrowUpRight  className="w-4 h-4 ml-2 mt-0.5"/></Button>
        <div className='grid grid-cols-1 gap-5'>
          <div className='grid gap-5 grid-rows-1 md:grid-cols-4 md:grid-flow-row w-full'>
     
            <Card motion={false} className='p-5 md:col-span-3'>
              <About />
            </Card>
            
            <Socials motion={true} className='md:col-span-1' />


          </div>
          <div className='grid gap-5 grid-cols-1 xl:grid-cols-4 xl:grid-rows-1 xl:grid-flow-row w-full '>
            <Card motion={false} className='xl:row-span-1 flex justify-center justify-items-center'>
              <InfiniteScroll  />
            </Card>
            <LatestProjects className='xl:row-span-1 xl:col-span-3 ' amount={2}/>
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