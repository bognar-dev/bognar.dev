import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
import Project from '@/components/project';
import { promises as fs } from 'fs';
export default async function Projects() {
  try {
    // Read project files from the public/projects directory
    const projectsDir = '@/../public/projects'; // Update the path as needed
    const projectFiles = await fs.readdir(projectsDir);

    // Read project data from each file
    const projectsData = await Promise.all(
      projectFiles.map(async (projectFile) => {
        const projectPath = `${projectsDir}/${projectFile}`;
        const projectContent = await fs.readFile(projectPath, 'utf-8');
        return JSON.parse(projectContent);
      })
    );

    return (
      <main className="flex min-h-screen min-w-full flex-col bg-background-100 p-10 px-28 w-full">
        <div>
          {projectsData.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading projects:', error);
    // Handle the error as needed
    return <div>Error loading projects</div>;
  }
}
