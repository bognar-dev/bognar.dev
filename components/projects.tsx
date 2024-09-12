"use client"
import { Project, getProjects } from '@/app/projects/utils';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Icons } from './icons';
import ProjectCard from './project-card';
import ProjectFilter from './project-filter';
import SectionHeading from './section-header';


const Projects = ({projects}:{projects:Project[]}) => {
    const [filterOpen, setFilterOpen] = React.useState<boolean>(false);
    const [filteredProjects, setFilteredProjects] = React.useState<typeof projects>(projects);
    const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
    const [parent] = useAutoAnimate();
    const allTags = projects.reduce((tags: string[], project) => {
        project.metadata.tags.split(',').forEach((tag: string) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
        return tags;
    }, []);

    React.useEffect(() => {
        let filteredProjects;

        if (selectedTags.length === 0) {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((project) => {
                return selectedTags.some((tag: string) => project.metadata.tags.includes(tag));
            });
        }

        setFilteredProjects(filteredProjects);
    }, [selectedTags, projects]);

    return (
        <div>
            <div ref={parent} className='grid gap-3 grid-cols-1 lg:grid-cols-2'>
                {filteredProjects.map((project, index: number) => (
                    <ProjectCard project={project} key={index} className='' />
                ))}
            </div>
        </div>
    );
};

export default Projects;
