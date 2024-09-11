import { twMerge } from 'tailwind-merge';
import { getProjects } from '../app/projects/utils';
import Card from './card';
import LatestProjectAnimation from './latest-project-animation';
import SectionHeading from './section-header';
import { Button } from './ui/button';
import Link from 'next/link';


export default async function LatestProjects({ amount = 2, className }: { amount?: number, className?: string }) {

    const projects = getProjects().filter(project => project.metadata.featured);

    return (
        <div id='projects'>
            <SectionHeading>Recent Projects:</SectionHeading>
            <LatestProjectAnimation projects={projects} />
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
                <Button variant={'outline'} asChild>
                    <Link href={'/projects'}> See all projects</Link>
                </Button>
            </div>
        </div >
    );
};
