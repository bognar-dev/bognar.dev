

import LatestProjects from '@/components/latest-projects'
import Timeline from '@/components/timeline'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'

import { Icons } from '@/components/icons'
import LenisWrapper from '@/components/lenis-wrapper'
import Link from 'next/link'



export default function Home() {


  return (
    <LenisWrapper className='flex flex-col justify-items-center justify-center min-h-screen  gap-10'>
        <Title className='h-screen'/>

    
        <Button asChild variant={'default'} className='bg-primary-300 hover:bg-primary-400'>
          <Link href="/projects" >
            See my projects
            <Icons.arrowUpRight className="w-4 h-4 ml-2 mt-0.5" />
          </Link>
          </Button>
        
        <LatestProjects className='' amount={2} />
        <Timeline  />

      
    </LenisWrapper>
  )
}