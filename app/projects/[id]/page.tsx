import ProjectPreview from "@/components/project-preview";
import ProjectView from "@/components/project-view";
import { Project} from "@/types/project";

export async function generateStaticParams() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
  const posts  = await( response.json()) as Project[];
  return posts.map((post) => ({
    id: String(post.id),
  }))
  }
  


export default function ProjectPage({ params }: { params: { id: string } }){
    const {id} = params
    return(
        <h1>
        {id}
        </h1>
    )
}

