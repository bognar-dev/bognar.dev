
import timelineData from '@/public/timeline.json';
import { TimeLine} from '@/types/timeline';
import Link from 'next/link';
import { Key } from 'react';
import { Icons } from './icons';
import Button from './button';



export default function Timeline({onHomePage}:{onHomePage : boolean}) {
    return (
        timelineData.length > 0 && (
            <div className=''>
            <div className="flex flex-col relative m-4 after:bg-accent-500 after:absolute after:w-1 after:h-[100%] after:rounded-full ">
                
                {onHomePage ? timelineData.slice(0, 3).map((data: any, idx: Key | null | undefined) => (
                    <TimelineItem data={data} key={idx} />
                )) : timelineData.map((data: any, idx: Key | null | undefined) => (
                    <TimelineItem data={data} key={idx} />
                ))}
                
            </div>
            <div className='flex justify-center items-center pb-5'>
            {onHomePage && <Button href={'/biography'} >See more</Button>}
            </div>
            </div>
        )
        
    );
}

function TimelineItem({ data }: { data: TimeLine }) {

    return (
            <div className="shadow-md rounded-sm bg-secondary-100 grid gap-4 m-5 p-5 "> 
            <span className="rounded-full px-3 text-text-100 justify-self-end " style={{ background: data.category?.color }}>
                    {data.category?.tag}
                </span>
                <time className='italic'>{data.date}</time>
            <p className='row-span-2'>{data.text}</p>
                {data.link && (
                    <Link
                    className=''
                        href={data.link.url}
                    >
                        <Icons.arrowRight className='stroke-secondary-300'/>
                    </Link>
                )}
                <span className="circle" />
            </div>
    )
}