export async function generateStaticParams() {
    const projects = await fetch(`${process.env.BACKEND_URL}/api/projects`).then((res) => res.json())

    return projects.map((project:any) => ({
        slug: project.id,
    }))
}


export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Project: {params.slug}</div>
}