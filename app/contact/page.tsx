import { PageWrapper } from '@/app/(components)/page-wrapper'
import Socials from '@/app/(components)/socials'
export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen min-w-full flex-col px-5 md:px-20 w-full">
        <Socials className='min-w-full' />

      </main>
    </PageWrapper>
  )
}
