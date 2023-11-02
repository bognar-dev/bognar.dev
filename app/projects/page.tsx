
import ProjectView from '@/components/project-view';
import { Project, Projects } from '@/types/project';

export default async function Projects() {

  const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const data  = await( response.json()) as Project[];

  return (
    <main className="flex min-h-screen min-w-full flex-row  bg-background-100 px-5 md:px-20 w-full">
      <div>
        {data.map((project: Project, index: number) => (
          <ProjectView key={index} project={project.data}/>
        ))}


      </div>
    </main>
  );

}