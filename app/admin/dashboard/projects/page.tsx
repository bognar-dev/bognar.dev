import { Projects,Project } from "@/types/project"

export async function generateStaticParams() {
    const projects: Projects = await fetch(`${process.env.BACKEND_URL}/api/projects`).then((res) => res.json())

    return projects.map((project:Project) => ({
        slug: project.id,
    }))
}


export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Project: {params.slug}</div>
}