import { Project } from '@/types/project';
import { twMerge } from 'tailwind-merge';
import Card from './card';
import LatestProjectAnimation from './latest-project-animation';
import SectionHeading from './section-header';


export default async function LatestProjects({ amount = 2, className }: { amount?: number, className?: string }) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
    const data = await (response.json()) as Project[];
    data.sort((a, b) => new Date(b.data.endDate).getTime() - new Date(a.data.endDate).getTime()).splice(amount)


    return (
        <Card className={twMerge(className, 'p-5 ')}>
            <SectionHeading>Recent Projects:</SectionHeading>
            <LatestProjectAnimation data={data} />
        </Card>
    );
};
