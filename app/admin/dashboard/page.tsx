import Button from "@/components/button";
import Card from "@/components/card";
import ProjectPreview from "@/components/dashboard-project-preview";
import { Project, Projects } from "@/types/project";
import { cookies } from "next/headers";



export default async function Dashboard() {
  
  
  
    return (
      <main className="flex  flex-row  bg-background-100 px-5 md:px-20 w-full">
        <ProjectPreview></ProjectPreview>
      </main>
    )
  }
  