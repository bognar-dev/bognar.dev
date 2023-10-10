import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
     <BGBalls>
      <h1 className=' text-5xl md:text-9xl text-bold'>Bognar.dev</h1>
      <div className='text-xl md:text-2xl'>Where Algorithms Meet Aesthetics</div>
     </BGBalls>
     <div className='flex gap-2 flex-row flex-wrap items-center'>
      <div className='w-[500px] h-[300px] bg-primary-300'></div>
      <div className='w-[500px] h-[300px] bg-primary-300'></div>
      <div className='w-[500px] h-[300px] bg-primary-300'></div>
      <div className='w-[500px] h-[300px] bg-primary-300'></div>
     </div>
    </main>
  )
}
