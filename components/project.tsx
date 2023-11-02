// Project.js
import { ProjectData } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Button from './button';

function Project({ project }: { project: ProjectData }) {

    console.log(project)
    return (
        <div className="grid grid-flow-col gap-4">
            {project.image && <Image width={200} height={200} src={project.image} alt={project.name}/>}
            <div className='grid gap-8 m-5 grid-flow-row items-center justify-between'>
                <h2 className='text-3xl'>{project.name}</h2>
                <p>{project.description}</p>
                <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Project
                </Link>
                </Button>
                <p className=''>{project.longDescription}</p>
                <div>
                    <strong>Tags:</strong> {project.tags.join(', ')}
                </div>
                <div>
                    <strong>Start Date:</strong> {project.startDate}
                </div>
                <div>
                    <strong>End Date:</strong> {project.endDate}
                </div>
                <div>
                    <strong>Status:</strong> {project.status}
                </div>
                
                <Button>
                <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </Link>
                </Button>
               
            </div>
            
        </div>
    );
}

export default Project;
