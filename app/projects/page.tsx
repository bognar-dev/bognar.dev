import Project from '@/components/project';

export default async function Projects() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`)
    if (response.ok) {
      const data = await response.json();
    return (
      <main className="flex min-h-screen min-w-full flex-col  bg-background-100 px-5 md:px-20 w-full">
        <div>
          {data.map((project:any, index:number) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <h1 className='text-5xl'>{`${process.env.BACKEND_URL}/api/projects`}</h1>
      </main>
    );
  
}
}
