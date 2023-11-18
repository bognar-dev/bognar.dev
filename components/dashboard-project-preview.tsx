import { Project } from "@/types/project";
import Button from "./button";
import Card from "./card";
import Link from "next/link";



export default async function ProjectPreview() {
  const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const projects = (await response.json()) as Project[];
  return (
    <div className="grid gap-8 grid-cols-2">
      {projects.map((project: Project, index: number) => (
        <Card key={index} className="p-6 ">
          {project.data.name}
          <Button href={`/admin/projects/${project.id}`}>Edit project</Button>
        </Card>
      ))}


    </div>
  )
}