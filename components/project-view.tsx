import { ProjectData } from '@/types/project';
import Link from 'next/link';
import React from 'react';
import Button from './button';
import Card from './card';
import Tag from './tag';

function ProjectView({ project }: { project: ProjectData }) {
    return (
        <article className="py-5 max-w-5xl break-words leading-relaxed mx-auto prose-slate font-light flex flex-col justify-items-start items-center md:items-start ">
            <div className=" self-center min-w-fit my-10 before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-gradient-to-r from-accent-200 to-primary-200 relative inline-block">
                <span className=" font-semibold text-4xl relative text-accent-900">{project.name}</span>
            </div>
            <Button className="self-center m-10 bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200 text-white py-2 px-4 rounded"
                href={project.url} >
                Visit Project
            </Button>
            <p className='pt-10 leading-7'> {project.longDescription}</p>
           
            <blockquote className="py-5">
                When did I start this project ? {project.startDate}
            </blockquote>
            {project.status == 'finished' ??

                <blockquote>
                    Project finished on {project.endDate}
                </blockquote>}


            <Button className="py-2 px-4 rounded"
                href={project.githubRepo} >
                GitHub Repository
            </Button>

            <div className='flex items-start justify-start gap-4 m-3'>
                {project.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} colour={"secondary"} />
                ))}
            </div>
        </article>
    );
}

export default ProjectView;
