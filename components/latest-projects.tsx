'use client'

import { Project } from '@/types/project';
import React from 'react';
import ProjectPreview from './project-preview';
import Card from './card';
import { twMerge } from 'tailwind-merge';
import SectionHeading from './section-header';
import ProjectCard from './project-card';
import { useMediaQuery } from 'react-responsive';

export default async function LatestProjects({amount=2,className}:{amount?:number,className?:string}) {
    const isMobile = useMediaQuery({ query: '(min-width: 700px)' });
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
    const data  = await( response.json()) as Project[];
    data.sort((a,b)=>new Date(b.data.endDate).getTime() - new Date(a.data.endDate).getTime()).splice(amount)

    if(isMobile){
        <>
        <SectionHeading>Recent Projects:</SectionHeading>
        <div className='grid lg:grid-cols-2 lg:grid-rows-1 gap-3  '>
            {data.map((project: Project, key: number) => (
                
                <ProjectCard animate={false} project={project} key={key} className='bg-accent-50'/>
            ))}
        </div>
        </>
    }
    return (
        <Card className={twMerge('p-5',className)}>
        <SectionHeading>Recent Projects:</SectionHeading>
        <div className='grid lg:grid-cols-2 lg:grid-rows-1 gap-3  '>
            {data.map((project: Project, key: number) => (
                
                <ProjectCard animate={false} project={project} key={key} className='bg-accent-50'/>
            ))}
        </div>
        </Card>
    );
};
