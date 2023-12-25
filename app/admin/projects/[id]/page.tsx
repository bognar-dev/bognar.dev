import { Project } from "@/types/project";
import { ProjectEditButton, ProjectEditDate, ProjectEditForm, ProjectEditHeader, ProjectEditTag, ProjectEditText, ProjectMarkdown } from "@/app/admin/projects/project-edit-form";
import { Icons } from "@/components/icons";
import { SubmitButton } from "@/components/submit-button";

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
  
  return (
    <>

      <ProjectEditForm className="" project={project}>
        <ProjectEditHeader>

          {project.data.tags.map((tag, index) => (
            <div key={index} className='flex gap-2'>
              <ProjectEditTag tag={tag}>{tag}</ProjectEditTag>
              <Icons.circleMinus className="w-1 h-1"  />
            </div>
          ))}

          <Icons.circlePlus className='m-3 self-center' />
        </ProjectEditHeader>
        <ProjectEditDate>
          Start Date
        </ProjectEditDate>
        <ProjectEditDate>
          End Date
        </ProjectEditDate>
        <ProjectEditText />
        <ProjectMarkdown></ProjectMarkdown>
        <SubmitButton>Save</SubmitButton>
      </ProjectEditForm>

    </>
  );
}
