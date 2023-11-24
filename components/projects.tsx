"use client"
import { Project } from '@/types/project';
import React from 'react';
import ProjectCard from './project-card';
import ProjectFilter from './project-filter';

type ProjectsViewProps = {
    data: Project[],
}

const Projects = ({ data }: ProjectsViewProps) => {
    
    const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
    const allTags = data.reduce((tags: string[], project: Project) => {
        project.data.tags.forEach((tag: string) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
        return tags;
    }, []);
    console.log(selectedTags);
    return (
        <div>
            <ProjectFilter tags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 min-w-full'>
                {data.map((project: Project, index: number) => (
                    <ProjectCard project={project} key={index} className='bg-accent-50' />
                ))}
            </div>
        </div>
    );
};

export default Projects;
