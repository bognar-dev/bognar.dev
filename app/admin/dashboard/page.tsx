import Button from "@/components/button";
import Card from "@/components/card";
import { Project, Projects } from "@/types/project";
import { cookies } from "next/headers";



export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const projects : Projects = await response.json();
  
  
    return (
      <main className="flex min-h-screen min-w-full flex-row  bg-background-100 px-5 md:px-20 w-full">
        <div className="grid gap-8 ">
          {projects.map((project: Project, index: number) => (
            <Card key={index} className="p-6 ">
              {project.data.name}
              <Button>Edit project</Button>
            </Card>
          ))}


        </div>
      </main>
    )
  }
  