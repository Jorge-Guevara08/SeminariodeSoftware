import {ProjectDao} from '@dao/models/ProjectsDao';

export interface IProject {
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};

// const newProject: IProject = {
//     name: '',
//     description: '',
//     isActive: false
// };


// const memoryProjects: IProject[] = [];
// let createdProjects: number = 0;

const ProjectDaoInstance = new ProjectDao();

export const createProject = async (project: IProject) => {
    
    // const newProject = { ...project };
    // newProject._id = (++createdProjects).toString();
    // newProject.createdAt = new Date();
    // newProject.updatedAt = newProject.createdAt;
    // memoryProjects.push(newProject);
    // return newProject;

    return ProjectDaoInstance.create(project);
};

export const getProjects = () => {
    return ProjectDaoInstance.find({});

    // return memoryProjects;
};

export const getProject = (id: string) => {

    return ProjectDaoInstance.findOne(id);

    // const project = memoryProjects.find(p => p._id === id);
    // if (!project) throw new Error('Project not found');
    // return project;
}


export const updateProject = (id: string, project: Partial<IProject>) => {

    return ProjectDaoInstance.update(id, project);

    // const index = memoryProjects.findIndex(p => p._id === id);
    // if (index === -1) throw new Error('Project not found');
    // memoryProjects[index] = { ...memoryProjects[index], ...project, updatedAt: new Date() };
    // return memoryProjects[index];
};

export const deleteProject = (id: string) => {

    return ProjectDaoInstance.delete(id);

    // const index = memoryProjects.findIndex(p => p._id === id);
    // if (index === -1) throw new Error('Project not found');
    // memoryProjects.splice(index, 1);
    // return true;
}