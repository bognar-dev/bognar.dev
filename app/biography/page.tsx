import { PageWrapper } from '@/app/(components)/page-wrapper'
import Timeline from '@/app/(components)/timeline'
export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen min-w-full flex-col justify-center items-center font-body  px-5 w-full gap-5">
        <Timeline />
      </main>
    </PageWrapper>
  )
}
