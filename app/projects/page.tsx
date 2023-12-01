
import ProjectCard from '@/components/project-card';
import ProjectFilter from '@/components/project-filter';
import ProjectPreview from '@/components/project-preview';
import { Project } from '@/types/project';
import Projects from '@/components/projects';

export default async function ProjectsPage() {


  const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const data = await response.json() as Project[];


  return (
    <main className="flex flex-row justify-items-center justify-center min-h-screen p-2 sm:p-5">
      <Projects data={data} />
    </main>
  );
}