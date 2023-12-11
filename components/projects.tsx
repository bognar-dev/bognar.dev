"use client"
import { Project } from '@/types/project';
import React from 'react';
import ProjectCard from './project-card';
import ProjectFilter from './project-filter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { AnimatePresence, motion ,useMotionValue,useSpring} from 'framer-motion';
import SectionHeading from './section-header';
import { Icons } from './icons';

type ProjectsViewProps = {
    data: Project[],
}

const Projects = ({ data }: ProjectsViewProps) => {
    const [filterOpen, setFilterOpen] = React.useState<boolean>(false);
    const [filteredData, setFilteredData] = React.useState<Project[]>(data);
    const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
    const [parent] = useAutoAnimate();
    const allTags = data.reduce((tags: string[], project: Project) => {
        project.data.tags.forEach((tag: string) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
        return tags;
    }, []);

    React.useEffect(() => {
        let filteredProjects;

        if (selectedTags.length === 0) {
            filteredProjects = data;
        } else {
            filteredProjects = data.filter((project: Project) => {
                return selectedTags.some((tag: string) => project.data.tags.includes(tag));
            });
        }

        setFilteredData(filteredProjects);
    }, [selectedTags, data]);

    return (
        <div>
            <SectionHeading className='flex flex-wrap items-center justify-center mb-3 gap-2 cursor-pointer' onClick={() => setFilterOpen(prevState => !prevState)}>
                Filter
               
                    {filterOpen ? <Icons.up /> : <Icons.down />}
            </SectionHeading>
            <AnimatePresence>
                {filterOpen && <ProjectFilter tags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />}
            </AnimatePresence>
            <div ref={parent} className='grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 min-w-full'>
                {filteredData.map((project: Project, index: number) => (
                    <ProjectCard project={project} key={index} className='' />
                ))}
            </div>
        </div>
    );
};

export default Projects;
