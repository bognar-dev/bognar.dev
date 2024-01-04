import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
import { PageWrapper } from '@/components/page-wrapper'
export default function Home() {
  return (
    <PageWrapper>
    <main className="flex min-h-screen min-w-full flex-col justify-center items-center font-body  px-5 w-full gap-5">
      <Timeline/>
    </main>
    </PageWrapper>
  )
}
