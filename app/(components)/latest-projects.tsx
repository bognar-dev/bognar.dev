import { Project } from '@/types/project';
import { twMerge } from 'tailwind-merge';
import Card from './card';
import LatestProjectAnimation from './latest-project-animation';
import SectionHeading from './section-header';
import { getProjects } from '../projects/utils';


export default async function LatestProjects({ amount = 2, className }: { amount?: number, className?: string }) {

    const projects = getProjects();
    console.log(projects)   

    return (
        <Card className={twMerge(className, 'p-5 ')}>
            <SectionHeading>Recent Projects:</SectionHeading>
            <LatestProjectAnimation projects={projects} />
        </Card>
    );
};
