

export interface ProjectData {
    name: string,
    description: string,
    url: string,
    longDescription: string,
    tags: string[],
    startDate: string,
    endDate: string,
    status: string,
    teamMembers: string[],
    githubRepo: string,
    image: string,
}


export interface Project{
    id : number,
    createdAt: string
    updatedAt: string
    data: ProjectData
}


export type Projects = Project[];
