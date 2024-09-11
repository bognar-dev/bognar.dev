import { twMerge } from 'tailwind-merge';
import { getProjects } from '../app/projects/utils';
import Card from './card';
import LatestProjectAnimation from './latest-project-animation';
import SectionHeading from './section-header';


export default async function LatestProjects({ amount = 2, className }: { amount?: number, className?: string }) {

    const projects = getProjects().filter(project => project.metadata.featured);

    return (
        <div id='projects'>
            <SectionHeading>Recent Projects:</SectionHeading>
            <LatestProjectAnimation projects={projects} />
        </div>
    );
};
