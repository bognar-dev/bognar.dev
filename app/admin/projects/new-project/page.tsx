"use client"

import React, { useState } from 'react';
import { ProjectEditDate, ProjectEditForm, ProjectEditHeader, ProjectEditTag, ProjectEditText, ProjectMarkdown } from '../project-edit-form';
import { Project } from '@/types/project';
import { Icons } from '@/components/icons';
import { useAutoAnimate } from '@formkit/auto-animate/react';



const Page: React.FC = () => {

    const [parent] = useAutoAnimate();
    const [project,setProject] = useState( {
        id: 1,
        createdAt: "2022-01-01T00:00:00Z",
        updatedAt: "2022-01-01T00:00:00Z",
        data: {
            name: "Example Project",
            description: "This is an example project.",
            url: "https://example.com",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            tags: ["tag1", "tag2", "tag3"],
            startDate: "2022-01-01",
            endDate: "2022-01-31",
            status: "In Progress",
            teamMembers: ["John Doe", "Jane Smith"],
            githubRepo: "https://github.com/example/example-project",
            image: "https://yvlgmxrunsfqgobqceqr.supabase.co/storage/v1/object/public/images/console-racing.png"
        }
    })

    return (
        <ProjectEditForm className="" project={project}>
            <ProjectEditHeader>

                {project.data.tags.map((tag, index) => (
                    <div key={index} ref={parent} className='flex gap-2'>
                        <ProjectEditTag tag={tag}>{tag}</ProjectEditTag>
                        <Icons.circleMinus className="w-1 h-1" onClick={() => {
                            const updatedTags = project.data.tags.filter((t) => t !== tag);
                            const updatedProject = { ...project, data: { ...project.data, tags: updatedTags } };
                            setProject(updatedProject)
                        }} />
                    </div>
                ))}

                <Icons.circlePlus className='m-3 self-center' onClick={() => {
                    const newTag = `tag${project.data.tags.length +1}`;
                    const updatedTags = [...project.data.tags, newTag];
                    const updatedProject = { ...project, data: { ...project.data, tags: updatedTags } };
                    setProject(updatedProject)
                }} />
            </ProjectEditHeader>
            <ProjectEditDate>
                Start Date
            </ProjectEditDate>
            <ProjectEditDate>
                End Date
            </ProjectEditDate>
            <ProjectEditText />
            <ProjectMarkdown></ProjectMarkdown>
        </ProjectEditForm>
    );
};

export default Page;
