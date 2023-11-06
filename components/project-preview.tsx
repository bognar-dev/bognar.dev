// Project.js
import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Button from './button';
import Card from './card';
import { Icons } from './icons';


function ProjectPreview({ project ,moreButton}: { project: Project,moreButton:boolean }) {
    return (
        <header className='flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md bg-center shadow-sm bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.data.image})`}} >
            <div className="flex justify-between pb-5">
                <div className="text-lg font-bold uppercase">{project.data.name}</div>
                <div className="flex items-center text-sm">
                    <p><span className="inline-block pb-0" id="sinceData">{project.data.endDate}</span></p>
                    <Icons.clock />
                </div>
            </div>
            <div className="pt-12">
                <div className="flex items-center mb-3 text-sm">
                    <Icons.tag />
                    {project.data.tags.join(', ')}
                </div>
                <h1 className="title">{project.data.description}</h1>
                {moreButton && <Button><Link href={`/projects/${project.id}`}>More</Link></Button>}
                
            </div>
        </header>
    );
}

export default ProjectPreview;
