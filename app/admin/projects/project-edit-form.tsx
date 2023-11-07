"use client"

import Button from "@/components/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { sendEditedProject } from '@/app/actions';
import { useState } from "react";

function ProjectEditForm({ project, moreButton }: { project: Project, moreButton: boolean }) {
    const [header, setHeader] = useState(project.data.name)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeader(e.target.value);
    };

    
    
    return (
        <form action={sendEditedProject}>

            <header className='flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md bg-center shadow-sm bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.data.image})` }} >
                <input
                    id="image"
                    className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="file"
                    name="image"
                    required
                />
                <div className="flex justify-between pb-5">
                    <input className="text-lg font-bold uppercase" value={header} name="projectName" onInput={handleChange} />
                    <div className="flex items-center text-sm">
                        <p><input className="inline-block pb-0" type="date" name="sinceData" placeholder={project.data.endDate} defaultValue={project.data.endDate} required /></p>
                        <Icons.clock />
                    </div>
                </div>
                <div className="pt-12">
                    <Icons.tag />
                    {project.data.tags.map((tag: string, index: number) => (
                        <input
                            className="w- flex items-center mb-3 text-sm font-bold text-primary-300"
                            placeholder={tag}
                            defaultValue={tag}
                            name={`tag`}
                            key={index}
                            required
                        />
                    ))}

                    <input className="" name="description" placeholder={project.data.description} required defaultValue={project.data.description} />
                    {moreButton && <Button><Link href={`/projects/${project.id}`}>More</Link></Button>}

                </div>
            </header>
            <div className="grid grid-flow-col gap-4 ">
                {project.data.image && <Image width={200} height={200} className='rounded-xl' src={project.data.image} alt={project.data.name} />}
                <div className='grid gap-8 m-5 grid-flow-row items-center justify-between'>
                    <input className='text-3xl' value={header} name="projectName" onInput={handleChange} defaultValue={header} />

                    <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                        <input defaultValue={project.data.url} placeholder={project.data.url} required />
                    </Button>
                    <textarea className="" name="description" placeholder={project.data.longDescription} required defaultValue={project.data.longDescription} />

                    <div>
                        <strong>Start Date:</strong> {project.data.startDate}
                    </div>
                    <div>
                        <strong>End Date:</strong> {project.data.endDate}
                    </div>
                    <div>
                        <strong>Status:</strong> {project.data.status}
                    </div>
                    <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                        <input defaultValue={project.data.githubRepo} placeholder={project.data.githubRepo} required />
                    </Button>
                </div>

            </div>
        </form>
    );
}

export default ProjectEditForm;