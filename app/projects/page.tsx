import {  getProjects  } from "@/app/projects/utils";
import Projects from '@/components/projects';
import { PageWrapper } from '@/components/page-wrapper';

export default async function ProjectsPage() {

  let projects = getProjects()
  console.log(projects)
  return (
    <PageWrapper>
    <main className="flex flex-row justify-items-center justify-center min-h-screen p-2 sm:p-5">
      <Projects projects={projects}/>
    </main>
    </PageWrapper>
  );
}