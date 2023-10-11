import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      <BGBalls>
        <h1 className=' text-5xl md:text-9xl text-bold'>Bognar.dev</h1>
        <div className='text-xl md:text-2xl'>Where Algorithms Meet Aesthetics</div>
      </BGBalls>
      <div className='flex gap-2 flex-row flex-wrap items-center min-w-fit'>
        <Card>

          <h1>Recent Projects</h1>
          <Card>
            <div> Project 1</div>
          </Card>
          <Card>
            <div> Project 2</div>
          </Card>
        </Card>
          <Timeline></Timeline>
        <Card>
          <h1>History</h1>
          
        </Card>
      </div>
    </main>
  )
}
