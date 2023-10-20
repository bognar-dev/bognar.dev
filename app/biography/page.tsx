import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col  bg-background-100 p-5 md:p-10 w-full">
      <BGBalls>
        <h1 className=' text-5xl md:text-9xl text-bold'>About me</h1>
      </BGBalls>
      <div className='flex gap-10 flex-col lg:flex-row w-full'>
        <Card>

          <h1 className='text-3xl text-center first-letter:text-4xl'>Interests</h1>

          <div> Running</div>

        </Card>

        <Card>
          <h1 className='text-3xl text-center first-letter:text-4xl'>History</h1>
          <Timeline onHomePage={true}></Timeline>
        </Card>
      </div>
    </main>
  )
}
