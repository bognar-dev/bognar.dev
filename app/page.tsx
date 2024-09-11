
import LatestProjects from '@/components/latest-projects'
import Timeline from '@/components/timeline'
import { Button } from '@/components/ui/button'
import LenisWrapper from '@/components/lenis-wrapper'
import CursorHoverMask from '@/components/CursorHoverMask/page'
import { ChevronDown } from 'lucide-react'
import SignatureGallery from '@/components/signature-gallery'


    export default function Home() {

      return (
        <LenisWrapper className=''>
          <CursorHoverMask />
          <div className="flex justify-center">
            <Button variant={'ghost'} className='text-text-600 w-auto text-3xl'>
              See my projects
              <ChevronDown />
            </Button>
          </div>
          <SignatureGallery />
          
          
          
            <LatestProjects className='' amount={2} />
          <Timeline />
        </LenisWrapper>
      );
    }
