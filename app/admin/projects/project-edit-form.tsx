"use client"

import Button from "@/components/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Project } from "@/types/project";
import { sendEditedProject } from '@/app/actions';
import { useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/submit-button";

const initialState = {
    message: null,
}

function ProjectEditForm({ project, moreButton }: { project: Project, moreButton: boolean }) {
    const [header, setHeader] = useState(project.data.name)
    const [longDescription, setLongDescription] = useState(project.data.longDescription)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeader(e.target.value);
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeader(e.target.value);
    };




    // @ts-expect-error
    const [state, formAction] = useFormState(sendEditedProject, initialState);

    return (
        <form action={formAction}>
            <input name="id" hidden value={project.id} />
            <input name="imageURL" hidden value={project.data.image}/>
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
                    {moreButton && <Button href={`/projects/${project.id}`}>More</Button>}

                </div>
            </header>

            <div className='grid gap-8 m-5 grid-flow-row break-words'>
                <input className='text-3xl' value={header} name="projectName" onInput={handleChange} defaultValue={header} />

                <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                    <input defaultValue={project.data.url} placeholder={project.data.url} required />
                </Button>
                <div className="" contentEditable={true} id="longDescription" onChange={handleDescriptionChange} defaultValue={project.data.longDescription} >{project.data.longDescription} </div>
                <input value={longDescription} name="longDescription" hidden={true}></input>
                <div>
                    <label>Start Date</label>
                    <input type="date" defaultValue={project.data.startDate} required />
                </div>
                <div>
                    <label>End Date</label>
                    <input type="date" defaultValue={project.data.endDate} required />
                </div>

                <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
                    <input defaultValue={project.data.githubRepo} placeholder={project.data.githubRepo} required />
                </Button>


                    <SubmitButton>Update</SubmitButton>

               
            </div>
            <p aria-live="polite" className="self-center">
                    {state?.message}
                </p>
        </form>
        
    );
}

export default ProjectEditForm;