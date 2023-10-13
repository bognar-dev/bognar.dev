import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col  bg-background-100 p-10 w-full">
      <BGBalls>
        <h1 className=' text-5xl md:text-9xl text-bold'>Bognar.dev</h1>
        <div className='text-xl md:text-2xl pt-5'>Where Algorithms Meet Aesthetics</div>
      </BGBalls>
      <div className='flex gap-10 flex-col lg:flex-row w-full'>
        <Card>

          <h1 className='text-3xl text-center first-letter:text-4xl'>Recent Projects</h1>

          <div> Project 1</div>

          <div> Project 2</div>

        </Card>

        <Card>
          <h1 className='text-3xl text-center first-letter:text-4xl'>History</h1>
          <Timeline onHomePage={true}></Timeline>
        </Card>
      </div>
    </main>
  )
}
