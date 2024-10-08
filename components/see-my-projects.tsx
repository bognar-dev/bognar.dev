"use client"

import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const SeeMyProjects: React.FC = () => {

    const scrollToProjects = () => {
        const projects = document.getElementById('projects');
        if (projects) {
            projects.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="flex justify-center">
            <Button variant={'outline'} onClick={scrollToProjects} className='text-foreground w-auto text-3xl'>
                See my projects
                <ChevronDown />
            </Button>
        </div>
    );
};

export default SeeMyProjects;