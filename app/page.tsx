import LatestProjects from '@/components/latest-projects'
import Timeline from '@/components/timeline'
import { Button } from '@/components/ui/button'
import CursorHoverMask from '@/components/CursorHoverMask/page'
import { ChevronDown } from 'lucide-react'
import SignatureGallery from '@/components/signature-gallery'
import SeeMyProjects from '@/components/see-my-projects'



export default function Home() {
  
  return (
    <>
      <CursorHoverMask />
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
