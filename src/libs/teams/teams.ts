import { updateProject } from "../projects/projects";

export interface ITeam {
    id?: string;
    name: string;
    description: string;
    members?: string[];
    owner?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const memoryTeams: ITeam[] = [];
let createdTeams: number = 0;

export const createTeam = async (team: ITeam) => {

    const newTeam = { ...team };
    newTeam.id = (++createdTeams).toString();
    newTeam.createdAt = new Date();
    newTeam.updatedAt = newTeam.createdAt;
    memoryTeams.push(newTeam);
    return newTeam;
};

export const getTeams = () => {
    return memoryTeams;
};

export const getTeam = async (id: string) => {
    
    const team = memoryTeams.find(p => p.id === id);
    if (!team) throw new Error('Team not found');
    return team;
};
export const updateTeam = async (id: string, team: Partial<ITeam>) => {
    const index = memoryTeams.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Team not found');
    memoryTeams[index] = {...memoryTeams[index], ...team, updatedAt: new Date()};
    return memoryTeams[index];
};

export const deleteTeam = async (id: string) => {
    const index = memoryTeams.findIndex(p => p.id === id);
    if(index === -1) throw new Error('Team not found');
    memoryTeams.splice(index, 1);
    return true;
}
