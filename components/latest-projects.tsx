import { Project } from '@/types/project';
import React from 'react';
import ProjectPreview from './project-preview';
import Card from './card';
import { twMerge } from 'tailwind-merge';
import SectionHeading from './section-header';

export default async function LatestProjects({amount=2,className}:{amount?:number,className?:string}) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
    const data  = await( response.json()) as Project[];
    data.sort((a,b)=>new Date(b.data.endDate).getTime()-new Date(a.data.endDate).getTime()).splice(amount)

    
    return (
        <Card className={twMerge('p-5',className)}>
        <SectionHeading>Recent Projects:</SectionHeading>
        <div className='grid lg:grid-cols-2 lg:grid-rows-1 gap-3  '>
            {data.map((project: Project, index: number) => (
                <ProjectPreview className='rounded-xl' moreButton={true} key={index} project={project} admin={false} />
            ))}
        </div>
        </Card>
    );
};
