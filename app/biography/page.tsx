import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-center items-center font-body  px-5 w-full gap-5">
      <BGBalls>
        <div className='grid grid-rows-1 gap-5'>
        <h1 className=' text-5xl md:text-9xl text-bold'>About me</h1>
     
        <Card>

          <h1 className='text-3xl text-center first-letter:text-4xl'>Interests</h1>

          <div> Running</div>

        </Card>

        <Card>
          <h1 className='text-3xl text-center first-letter:text-4xl'>History</h1>
          <Timeline onHomePage={false}></Timeline>
        </Card>
      </div>
       </BGBalls>
    </main>
  )
}
