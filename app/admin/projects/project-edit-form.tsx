import Button from "@/components/button";
import { Icons } from "@/components/icons";
import Link  from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

function ProjectEditForm({ project ,moreButton}: { project: Project,moreButton:boolean }) {
    return (
        <form>
        <header className='flex flex-col w-full justify-between min-h-[400px] p-5 rounded-md bg-center shadow-sm bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.data.image})`}} >
            <div className="flex justify-between pb-5">
                <input className="text-lg font-bold uppercase" placeholder={project.data.name}name="projectName" required></input>
                <div className="flex items-center text-sm">
                    <p><span className="inline-block pb-0" id="sinceData">{project.data.endDate}</span></p>
                    <Icons.clock />
                </div>
            </div>
            <div className="pt-12">
                <div className="flex items-center mb-3 text-sm">
                    <Icons.tag />
                    {project.data.tags.join(', ')}
                </div>
                <h1 className="title">{project.data.description}</h1>
                {moreButton && <Button><Link href={`/projects/${project.id}`}>More</Link></Button>}
                
            </div>
        </header>
          <div className="grid grid-flow-col gap-4 ">
          {project.data.image && <Image width={200} height={200} className='rounded-xl' src={project.data.image} alt={project.data.name}/>}
          <div className='grid gap-8 m-5 grid-flow-row items-center justify-between'>
              <h2 className='text-3xl'>{project.data.name}</h2>
              <p>{project.data.description}</p>
              <Button className='bg-secondary-200 shadow-secondary-200 hover:shadow-secondary-200'>
              <Link href={project.data.url} target="_blank" rel="noopener noreferrer">
                  Visit Project.data
              </Link>
              </Button>
              <p className=''>{project.data.longDescription}</p>
              <div>
                  <strong>Tags:</strong> {project.data.tags.join(', ')}
              </div>
              <div>
                  <strong>Start Date:</strong> {project.data.startDate}
              </div>
              <div>
                  <strong>End Date:</strong> {project.data.endDate}
              </div>
              <div>
                  <strong>Status:</strong> {project.data.status}
              </div>
              
              <Button>
              <Link href={project.data.githubRepo} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
              </Link>
              </Button>
             
          </div>
          
      </div>
      </form>
    );
}

export default ProjectEditForm;