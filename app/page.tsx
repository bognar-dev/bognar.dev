

import LatestProjects from '@/components/latest-projects'
import Timeline from '@/components/timeline'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'

import { Icons } from '@/components/icons'
import LenisWrapper from '@/components/lenis-wrapper'
import Link from 'next/link'
import CursorHoverMask from '@/components/CursorHoverMask/page'



export default function Home() {


  return (
    <LenisWrapper className='flex flex-col justify-items-center justify-center min-h-screen  gap-10'>
      <CursorHoverMask />

   

      <LatestProjects className='' amount={2} />
      <Timeline />


    </LenisWrapper>
  )
}