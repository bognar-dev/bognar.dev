import About from '@/app/(components)/about'
import BGBalls from '@/app/(components)/bg-balls'
import Card from '@/app/(components)/card'
import InfiniteScroll from '@/app/(components)/infinitescroll'
import LatestProjects from '@/app/(components)/latest-projects'
import { PageWrapper } from '@/app/(components)/page-wrapper'
import Socials from '@/app/(components)/socials'
import Timeline from '@/app/(components)/timeline'
import Title from '@/app/(components)/title'
import Button from './(components)/button'
import { Icons } from './(components)/icons'



export default function Home() {
  return (
    <>
      <BGBalls>
        <Title />
      </BGBalls>

      <main className="flex flex-grow relative min-h-screen min-w-full flex-col justify-start justify-items-center items-center px-5 w-full gap-5">
          <Button className='shadow-none flex flex-row justify-items-center justify-center group text-text-50 hover:animate-wiggle flex-shrink ' href="/projects">See my projects  <Icons.arrowUpRight className="w-4 h-4 ml-2 mt-0.5" /></Button>


          <div className='grid grid-cols-1 gap-5 mt-8'>
            <div className='grid gap-5 grid-rows-1 md:grid-cols-4 md:grid-flow-row w-full'>

              <Card blob={true} motion={false} className='p-5 md:col-span-3'>
                <About />
              </Card>

              <Socials motion={true} className='md:col-span-1' />


            </div>
            <div className='grid gap-5 grid-cols-1 xl:grid-cols-4 xl:grid-rows-1 xl:grid-flow-row w-full'>
              <Card motion={false} className='xl:row-span-1 flex justify-center justify-items-center px-0'>
                <InfiniteScroll />
              </Card>
              <LatestProjects className='xl:row-span-1 xl:col-span-3 ' amount={2} />
            </div>

          </div>
          <Timeline />


          {/* <div className='flex gap-5 flex-col lg:flex-row w-full'>
          <Card className='h-[300px]'>
            Recent projects
          </Card>

        </div> */}

      </main>
    </>
  )
}