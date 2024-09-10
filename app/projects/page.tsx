import { getProjects } from "@/app/projects/utils";
import { PageWrapper } from '@/components/page-wrapper';
import Projects from '@/components/projects';

export default async function ProjectsPage() {

  let projects = getProjects()
  return (
    <PageWrapper>
      <main className="flex flex-row justify-items-center justify-center min-h-screen md:pt-20 sm:p-5">
        <Projects projects={projects} />
      </main>
    </PageWrapper>
  );
}