// Project.js
import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Button from './button';
import Card from './card';
import { Icons } from './icons';
import { twMerge } from 'tailwind-merge';
import Tag from './tag';


function ProjectPreview({className, project ,moreButton,admin}: { className?: string,project: Project,moreButton:boolean,admin: boolean }) {
    const path = admin ? `/admin/projects/${project.id}`:`/projects/${project.id}`
    return (
        <header className={twMerge('flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md shadow-sm bg-no-repeat bg-cover bg-bottom',className)} style={{ backgroundImage: `url(${project.data.image})`}} >
            <div className="flex justify-between pb-5 ">
                <div className="text-lg font-bold uppercase p-1 bg-white/30 backdrop-blur-sm shadow-md rounded-lg">{project.data.name}</div>
                <div className="flex items-center text-sm p-1 bg-white/30 backdrop-blur-sm shadow-md rounded-lg">
                    <p><span className="inline-block pb-0" id="sinceData">{project.data.endDate}</span></p>
                    <Icons.clock />
                </div>
            </div>
            <div className="flex flex-col items-start justify-items-start  p-3 bg-primary-50 backdrop-blur-sm shadow-lg rounded-lg">
                <div className='flex flex-wrap flex-row gap-3 p-3'>
                {project.data.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} colour={"secondary"} />
                ))}
                </div>
                <h3 className="text-sm ">{project.data.description}</h3>
                {moreButton && <Button className=' '  href={path}>More</Button>}
                
            </div>
        </header>
    );
}

export default ProjectPreview;
