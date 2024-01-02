import fonts from "@/config/fonts"
import { cn } from "@udecode/cn"


export default function Title(){
   
    
  return(
    <>
      <h1 className={cn(' text-5xl md:text-9xl  font-semibold',fonts.madeGentle.className)}  >Bognar.dev</h1>
    <div className='text-xl md:text-2xl pt-5 self-center text-center'>Where Algorithms Meet Aesthetics</div>
    </>
  )
  }