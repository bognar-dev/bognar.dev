// Project.js
import { Project } from '@/types/project';
import React from 'react';

function Project({ project }: {project : Project}) {
    

    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit Project
            </a>
            <p>{project.longDescription}</p>
            <div>
                <strong>Tags:</strong> {project.tags.join(', ')}
            </div>
            <div>
                <strong>Start Date:</strong> {project.startDate}
            </div>
            <div>
                <strong>End Date:</strong> {project.endDate}
            </div>
            <div>
                <strong>Status:</strong> {project.status}
            </div>
            <div>
                <strong>Team Members:</strong> {project.teamMembers.join(', ')}
            </div>
            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                GitHub Repository
            </a>
            {project.image && <img src={project.image} alt={project.name} className="project-image" />}
        </div>
    );
}

export default Project;
