import { ProjectData } from '@/types/project';
import Link from 'next/link';
import React from 'react';
import Button from './button';

function ProjectView({ project }: { project: ProjectData }) {
    return (
        <article className="py-5 max-w-5xl break-words leading-relaxed mx-auto prose-slate font-light">
                <Button className="bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200 text-white py-2 px-4 rounded"
                     href={project.url} >
                        Visit Project
                    
                </Button>
                <p>{project.longDescription}</p>
                <blockquote>
                    Tags: {project.tags.join(', ')}
                </blockquote>
                <blockquote>
                    Start Date: {project.startDate}
                </blockquote>
                <blockquote>
                    End Date: {project.endDate}
                </blockquote>
                <blockquote>
                    Status: {project.status}
                </blockquote>
                <Button className="py-2 px-4 rounded"
                     href={project.githubRepo} >
                        GitHub Repository
                </Button>
            </article>
    );
}

export default ProjectView;
