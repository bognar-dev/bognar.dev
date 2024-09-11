import fonts from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Sign } from 'crypto'
import Link from 'next/link'
import React from 'react'
import SignatureForm from './signature-form'

function Content() {
  return (
    <div className='bg-primary-400 py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}


const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}




const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
             <p className={cn("text-3xl md:text-8xl",fonts.madeTommyBlackOutline.className)}>© {new Date().getFullYear()} Bognar.dev</p>
        </div>
    )
}


const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-text-200'>Sitemap</h3>
                {siteConfig.mainNav.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <Link href={href} key={`nav_${i}`} className='no-underline text-text-50  md:text-3xl'>
                            {title}
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-text-200'>Contact</h3>
                {siteConfig.socialLinks.map((link, i) => {
                    const { title, url } = link;
                    return (
                        <Link href={url} key={`social_${i}`} className='no-underline text-text-50 md:text-3xl'>
                            {title}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default function Footer() {
  return (
    <div 
        className='relative h-[36rem]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+36rem)] -top-[100vh]'>
            <div className='h-[36rem] sticky top-[calc(100vh-36rem)]'>
              <Content />
            </div>
        </div>
    </div>
  )
}
