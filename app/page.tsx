import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-">
     <BGBalls>
      <h1>Bognar.dev</h1>
      <div>Where Algorithms Meet Aesthetics</div>
     </BGBalls>
    </main>
  )
}
