import Button from '@/app/(components)/button'
import Image from 'next/image'
// @ts-ignore
import profile from "@/public/profile.jpg"
import SectionHeading from './section-header'

const About = () => {

    return (
        <div className='flex flex-shrink flex-col gap-2 items-center  justify-center '>
            <SectionHeading className='mb-2'>About me</SectionHeading>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-items-center justify-center'>
                <Image className='rounded-xl w-20 h-20 md:w-40 md:h-40 ' src={profile} width={800} height={800} alt='profile-pic'></Image>
                <div>

                    <p className='text-left md:leading-loose align-middle md:text-lg'>{`Hey there! I'm Niklas, a down-to-earth person with roots in Germany.
                    I've got a passion for cooking - not the fancy, over-the-top kind, but the practical, everyday recipes that make life a bit tastier.

    When I'm not in the kitchen, you'll find me sweating it out on the squash court, riding the waves while surfing, or enjoying a game of cricket. Sports are my way of staying active and having a good time.

    Professionally, I'm into the tech world. I like turning ideas into user-friendly interfaces. Frontend design is my thing, and I enjoy creating digital spaces that are not just visually appealing but also easy to navigate.
    `}
                    </p>
                </div>
            </div>
            <Button className='hover:animate-wiggle' href={'/biography'}>See my CV</Button>
        </div>
    )
}


export default About