import { Project } from "@/types/project";
import { ProjectEditForm, ProjectEditHeader, ProjectEditTag } from "@/app/admin/projects/project-edit-form";

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
      <ProjectEditForm project={project}>
        <ProjectEditHeader >
          {project.data.tags.map((tag) => (
            <ProjectEditTag key={tag} tag={tag}>{tag}</ProjectEditTag>
          ))}
        </ProjectEditHeader>
      </ProjectEditForm>
    </>
  );
}
