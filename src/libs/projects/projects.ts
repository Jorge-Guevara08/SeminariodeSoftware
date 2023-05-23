export interface IProject{
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

// const newProject: IProject = {
//     name: '',
//     description: '',
//     isActive: false
// };

const memoryProjects: IProject[] = [];
let createdProjects: number = 0;

export const createProject = async (project: IProject) => {
    const newProject = {...project};
    newProject._id = (++createdProjects).toString();
    newProject.createdAt = new Date();
    newProject.updatedAt = newProject.createdAt;
    memoryProjects.push(newProject);
    return newProject;
}

export const getProject = async () =>{
    return memoryProjects;
}