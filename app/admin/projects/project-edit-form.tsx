"use client"

import Button from "@/components/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Project } from "@/types/project";
import { sendEditedProject } from '@/app/actions';
import { createContext, useContext, useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/submit-button";
import Markdown from "@/components/markdown";
import { Textarea } from "@/components/textarea";
import { InputHTMLAttributes } from 'react';
import { create } from "domain";
import React from "react";
import { twMerge } from "tailwind-merge";
const initialState = {
    message: '',
}



const ProjectEditFormContext = createContext({
    project: {} as Project,
    formAction: {},
    state: initialState,
    header: '',
    longDescription: '',
    handleHeaderChange: (e: React.ChangeEvent<HTMLInputElement>) => { },
    handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => { }
});


const ProjectEditForm = ({ children, project, className }: { children: React.ReactNode, project: Project, className?: string }) => {

    const [header, setHeader] = useState(project.data.name)
    const [longDescription, setLongDescription] = useState(project.data.longDescription)

    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeader(e.target.value);
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setLongDescription(e.target.value);
    };

    const [state, formAction] = useFormState(sendEditedProject, initialState);


    return (
        <ProjectEditFormContext.Provider value={{ project, formAction, state, header, longDescription, handleHeaderChange, handleDescriptionChange }}>
            <form action={formAction}>
                <input value={longDescription} readOnly name="longDescription" hidden={true}></input>
                <input value={project.data.image} readOnly name="imageUrl" hidden={true}></input>
                <div className={twMerge('grid gap-8 m-5 grid-flow-row justify-items-center justify-center', className)}>
                    {children}
                </div>
            </form>
        </ProjectEditFormContext.Provider>
    )
}

ProjectEditForm.displayName = 'ProjectEditForm';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={twMerge(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input';

const InputHeader = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const { header, handleHeaderChange } = useContext(ProjectEditFormContext);
        return (
            <input className='text-3xl' value={header} name="projectName" onInput={handleHeaderChange} defaultValue={header} ref={ref} {...props} />
        )
    }
)


InputHeader.displayName = 'InputHeader';


interface ProjectTagProps extends InputHTMLAttributes<HTMLInputElement> {
    tag: string
    children?: React.ReactNode
}

const ProjectEditTag = React.forwardRef<HTMLInputElement, ProjectTagProps>(
    ({ className, type, tag, ...props }, ref) => {


        return (
            <>
                <Icons.tag />
                <input
                    className="w- flex items-center mb-3 text-sm font-bold text-primary-300"
                    placeholder={tag}
                    defaultValue={tag}
                    name={`tag`}
                    key={tag}
                    ref={ref}
                    required
                    {...props} />
            </>
        )
    }
)

ProjectEditTag.displayName = 'ProjectEditTag';
interface ProjectHeaderProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
}
const ProjectEditHeader = React.forwardRef<HTMLInputElement, ProjectHeaderProps>(
    ({ className, type, children, ...props }, ref) => {
        const { header, handleHeaderChange, project } = useContext(ProjectEditFormContext);
        return (
            <header className='flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md bg-center shadow-sm bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.data.image})` }} >
                <input
                    id="image"
                    className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="file"
                    name="image"
                />
                <div className="flex justify-between pb-5">
                    <input className="text-lg font-bold uppercase" value={header} name="projectName" onInput={handleHeaderChange} />
                    <div className="flex items-center text-sm">
                        <p><input className="inline-block pb-0" type="date" name="sinceData" placeholder={project.data.endDate} defaultValue={project.data.endDate} required /></p>
                        <Icons.clock />
                    </div>
                </div>
                <div className="pt-12">
                    {children}

                    <input className="" name="description" placeholder={project.data.description} required defaultValue={project.data.description} />


                </div>
            </header>
        )

    });

ProjectEditHeader.displayName = 'ProjectEditHeader';

interface ProjectTagProps extends InputHTMLAttributes<HTMLInputElement> { }

const ProjectEditButton = React.forwardRef<HTMLInputElement, ProjectTagProps>(
    ({ className, ...props }, ref) => {
        const { project } = useContext(ProjectEditFormContext);
        return (
            <Button className={twMerge('bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200', className)}>
                <input ref={ref} name="url" defaultValue={project.data.url} placeholder={project.data.url} required {...props} />
            </Button>
        )
    });


ProjectEditButton.displayName = 'ProjectEditButton';

const ProjectEditStatus = React.forwardRef<HTMLParagraphElement, ProjectTagProps>(
    ({ className, ...props }, ref) => {
        const { state } = useContext(ProjectEditFormContext);
        return (
            <p aria-live="polite" className="self-center">
                {state?.message}
            </p>
        )
    });




ProjectEditStatus.displayName = 'ProjectEditStatus';


interface ProjectTextProps extends InputHTMLAttributes<HTMLTextAreaElement> { }

const ProjectEditText = React.forwardRef<HTMLTextAreaElement, ProjectTextProps>(
    ({ className, ...props }, ref) => {
        const { handleDescriptionChange, project } = useContext(ProjectEditFormContext);
        return (
            <Textarea ref={ref} {...props} className="" contentEditable={true} id="longDescription" onChange={handleDescriptionChange} defaultValue={project.data.longDescription} />

        )
    });


ProjectEditText.displayName = 'ProjectEditText';


const ProjectMarkdown = React.forwardRef<HTMLTextAreaElement, ProjectTextProps>(
    ({ className, ...props }, ref) => {
        const { longDescription } = useContext(ProjectEditFormContext);
        return (
            <p className='pt-10 self-center prose dark:prose-invert'>
                <Markdown content={longDescription} />
            </p>
        )
    });


ProjectMarkdown.displayName = 'ProjectMarkdown';




interface ProjectDateProps extends InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode
    className?: string
}

const ProjectEditDate = React.forwardRef<HTMLInputElement, ProjectDateProps>(
    ({ className, children, ...props }, ref) => {

        const { project } = useContext(ProjectEditFormContext);
        return (
            <div className={className}>
                <label>{children}</label>
                <input ref={ref} type="date" defaultValue={project.data.endDate} required {...props} />
            </div>
        )
    });


ProjectEditDate.displayName = 'ProjectEditDate';

export { ProjectEditForm, ProjectEditHeader, ProjectEditTag, ProjectEditButton, ProjectEditStatus, ProjectEditText, ProjectMarkdown, ProjectEditDate };