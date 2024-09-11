import { PageWrapper } from '@/components/page-wrapper'
import Timeline from '@/components/timeline'
export default function Home() {
  return (
    <PageWrapper>
      <main className="flex flex-col justify-center items-center min-h-screen font-body py-20 w-full gap-5">
        <Timeline />
      </main>
    </PageWrapper>
  )
}
