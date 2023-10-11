
import timelineData from '@/public/timeline.json';
import { TimeLine} from '@/types/timeline';
import { Key } from 'react';



export default function Timeline() {
    return (
        timelineData.length > 0 && (
            <div className="flex flex-col relative m-4 after:bg-accent-500 after:content-[''] after:absolute after:left-[calc(50%- 2px)] after:w-2 after:h-[100%]">
                {timelineData.map((data: any, idx: Key | null | undefined) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        )
    );
}

function TimelineItem({ data }: { data: TimeLine }) {

    return (
        <div className="[&>*:nth-child(odd)]:bg-red-500 [&>*:nth-child(odd)]:self-end [&>*:nth-child(odd)]:justify-start [&>*:nth-child(odd)]:pl-3 [&>*:nth-child(odd)]:pr-1-3  flex justify-end pr-3 relative m-1 w-1/2">
            <div className="shadow-md border-2 bg-secondary-100 flex flex-col items-end p-2 relative w-[400px] max-w-70% text-right">
                <span className="tag" style={{ background: data.category?.color }}>
                    {data.category?.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                {data.link && (
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    )
}