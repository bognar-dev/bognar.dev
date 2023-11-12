
import ProjectPreview from '@/components/project-preview';
import { Project, Projects } from '@/types/project';

export default async function Projects() {

  const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const data  = await( response.json()) as Project[];

  return (
    <main className="flex min-h-screen min-w-full flex-row  bg-background-100 px-5 md:px-20 w-full">
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-w-full'>
        {data.map((project: Project, index: number) => (
          <ProjectPreview moreButton={true} key={index} project={project} admin={false}/>
        ))}


      </div>
    </main>
  );

}