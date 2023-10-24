'use client'
import Project from '@/components/project';

export default async function Projects() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`);
    const projectsData = await response.json();

    return (
      <main className="flex min-h-screen min-w-full flex-col  bg-background-100 px-5 md:px-20 w-full">
        <div>
          {projectsData.map((project:any, index:number) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </main>
    );
  
}
