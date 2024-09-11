
import LatestProjects from '@/components/latest-projects'
import Timeline from '@/components/timeline'
import { Button } from '@/components/ui/button'
import LenisWrapper from '@/components/lenis-wrapper'
import CursorHoverMask from '@/components/CursorHoverMask/page'
import { ChevronDown } from 'lucide-react'


    export default function Home() {

      return (
        <LenisWrapper className=''>
          <CursorHoverMask />
          <div className="flex justify-center">
            <Button variant={'ghost'} className='text-text-600 w-auto'>
              See my projects
              <ChevronDown />
            </Button>
          </div>

          
            <LatestProjects className='' amount={2} />
          <Timeline />
        </LenisWrapper>
      );
    }
