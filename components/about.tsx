import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/button'
// @ts-ignore
import profile from "@/public/profile.jpg"
import SectionHeading from './section-header'

const About = () => {

    return (
        <div className='grid gap-2 items-center justify-center  '>

            <div className='flex flex-col md:flex-row gap-3 items-center justify-center'>
                <Image className='rounded-xl w-20 h-20 md:w-40 md:h-40 self-center' src={profile} width={800} height={800} alt='profile-pic'></Image>
                <div>
                <SectionHeading>About me</SectionHeading>
                    <p className='text-left leading-relaxed align-middle text-lg'>{`Hey there! I'm Niklas, a down-to-earth person with roots in Germany.
                    I've got a passion for cooking - not the fancy, over-the-top kind, but the practical, everyday recipes that make life a bit tastier.

    When I'm not in the kitchen, you'll find me sweating it out on the squash court, riding the waves while surfing, or enjoying a game of cricket. Sports are my way of staying active and having a good time.

    Professionally, I'm into the tech world. I like turning ideas into user-friendly interfaces. Frontend design is my thing, and I enjoy creating digital spaces that are not just visually appealing but also easy to navigate.
    `}
                    </p>
                </div>
            </div>
            <Button className='' href={'/biography'}>See my CV</Button>
        </div>
    )
}


export default About