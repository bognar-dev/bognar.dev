// Project.js
import { ProjectData } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Button from './button';
import Card from './card';
import { Icons } from './icons';


function ProjectPreview({ project }: { project: ProjectData }) {
    console.log(project.image)
    return (
        <header className='flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md bg-center shadow-sm bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.image})`}} >
            <div className="flex justify-between pb-5">
                <div className="text-lg font-bold uppercase">{project.name}</div>
                <div className="flex items-center text-sm">
                    <p><span className="inline-block pb-0" id="sinceData">{project.endDate}</span></p>
                    <Icons.clock />
                </div>
            </div>
            <div className="pt-12">
                <div className="flex items-center mb-3 text-sm">
                    <Icons.tag />
                    {project.tags.join(', ')}
                </div>
                <h1 className="title">{project.description}</h1>
                <Button><Link href={'/'}>More</Link></Button>
            </div>
        </header>
    );
}

export default ProjectPreview;
