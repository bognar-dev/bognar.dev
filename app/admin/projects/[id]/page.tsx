import { Project } from "@/types/project";
import { ProjectEditDate, ProjectEditForm, ProjectEditHeader, ProjectEditTag, ProjectEditText, ProjectMarkdown } from "@/app/admin/projects/project-edit-form";

export async function generateStaticParams() {
  const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const projects = await (response.json()) as Project[];
  return projects.map((project) => ({
    id: String(project.id),
  }))
}



export default async function ProjectPage({ params }: { params: { id: string } }) {
  const response = await fetch(`${process.env.BACKEND_URL}/api/projects/${params.id}`, { next: { revalidate: 3600 } })
  const project = await (response.json()) as Project;
  console.log(response.json())
  return (
    <>
     
      <ProjectEditForm className="" project={project}>
        <ProjectEditHeader>

          {project.data.tags.map((tag, index) => (
            <div key={index} className='flex gap-2'>
              <ProjectEditTag tag={tag}>{tag}</ProjectEditTag>

            </div>
          ))}


        </ProjectEditHeader>
        <ProjectEditDate>
          Start Date
        </ProjectEditDate>
        <ProjectEditDate>
          End Date
        </ProjectEditDate>
        <ProjectEditText />
        <ProjectMarkdown></ProjectMarkdown>
      </ProjectEditForm>
      
    </>
  );
}
