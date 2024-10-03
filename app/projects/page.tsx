import { getProjects } from "@/app/projects/utils";
import { PageWrapper } from '@/components/page-wrapper';
import Projects from '@/components/projects';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore the projects developed by Niklas Bognar, showcasing skills in React, Next.js, and more.',
}
export default async function ProjectsPage() {

  let projects = getProjects()
  return (
    <PageWrapper>
      <main className="flex flex-row justify-items-center justify-center min-h-screen pt-20 p-5">
        <Projects projects={projects} />
      </main>
    </PageWrapper>
  );
}