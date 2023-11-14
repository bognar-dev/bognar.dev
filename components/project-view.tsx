import { ProjectData } from '@/types/project';
import Link from 'next/link';
import React from 'react';
import Button from './button';

function ProjectView({ project }: { project: ProjectData }) {
    return (
        <div className="">
            <div className="grid gap-8 items-center">
                <Button className="bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200 text-white py-2 px-4 rounded">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Project
                    </Link>
                </Button>
                <p className="text-lg md:text-xl leading-relaxed">{project.longDescription}</p>
                <div className="text-gray-700">
                    <strong>Tags:</strong> {project.tags.join(', ')}
                </div>
                <div className="text-gray-700">
                    <strong>Start Date:</strong> {project.startDate}
                </div>
                <div className="text-gray-700">
                    <strong>End Date:</strong> {project.endDate}
                </div>
                <div className="text-gray-700">
                    <strong>Status:</strong> {project.status}
                </div>
                <Button className="py-2 px-4 rounded">
                    <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default ProjectView;
