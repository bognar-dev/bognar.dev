import LatestProjects from '@/components/latest-projects'
import Timeline from '@/components/timeline'
import { Button } from '@/components/ui/button'
import CursorHoverMask from '@/components/CursorHoverMask/page'
import { ChevronDown, Heart } from 'lucide-react'
import SignatureGallery from '@/components/signature-gallery'
import SeeMyProjects from '@/components/see-my-projects'
import MobileInstruction from '@/components/mobile-instruction'



export default function Home() {

  return (
    <>
      <CursorHoverMask />
      <MobileInstruction/>
      <SeeMyProjects />
      
      <SignatureGallery />
      <div className='mt-20 '>
        <LatestProjects className='' amount={3} />
      </div>

      <div className='mt-20'>
        <Timeline />
      </div>
    </>
  );
}
