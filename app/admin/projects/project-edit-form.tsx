"use client"

import Button from "@/components/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { sendEditedProject } from '@/app/actions';
import { useState } from "react";
import { Textarea } from "@/components/textarea";
import { SubmitButton } from "@/components/submit-button";

function ProjectEditForm({ project, moreButton }: { project: Project, moreButton: boolean }) {
    const [header, setHeader] = useState(project.data.name)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeader(e.target.value);
    };



    
    
    return (
        <form action={sendEditedProject}>
            <input name="id" hidden value={project.id}/>
            <header className='flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md bg-center shadow-sm bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.data.image})` }} >
                <input
                    id="image"
                    className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="file"
                    name="image"
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

                <div className='grid gap-8 m-5 grid-flow-row'>
                    <input className='text-3xl' value={header} name="projectName" onInput={handleChange} defaultValue={header} />

                    <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                        <input defaultValue={project.data.url} placeholder={project.data.url} required />
                    </Button>
                    <Textarea wrap="soft" contentEditable={true} className="" name="longDescription" placeholder={project.data.longDescription} defaultValue={project.data.longDescription} />

                    <div>
                        <label>Start Date</label>
                        <input type="date" defaultValue={project.data.startDate} required/>
                    </div>
                    <div>
                    <label>End Date</label>
                        <input type="date" defaultValue={project.data.endDate} required/>
                    </div>
                    
                    <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                        <input defaultValue={project.data.githubRepo} placeholder={project.data.githubRepo} required />
                    </Button>

                    <SubmitButton>Submit</SubmitButton>
                </div>
        </form>
    );
}

export default ProjectEditForm;