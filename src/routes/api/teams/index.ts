import { createTeam, deleteTeam, getTeam, getTeams, updateTeam } from '@libs/teams/teams';
import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    res.json({version:1, scope:'teams'});
});

router.get('/allTeam', async (_req, res) => {
    try{
        const team = await getTeams();
        return res.json(team);
    }catch(ex: any){
        return res.status(500).json({error:ex?.message});
    }
});

router.get('/Teambyid/:id', async (req, res) => {
    try {
        const {id = ''} = req.params;
        const team = await getTeam(id);
        return res.json(team);
    } catch (ex: any) {
        return res.status(404).json({error: ex?.message});
    }
})

router.post('/newTeam', async (req, res) => {
    try{
        const {name = '', description = '', members = '', owner = '', status = ''} = req.body;
        const newTeam = {name, description, members, owner, status};
        const createdTeam = await createTeam(newTeam);
        return res.json(createdTeam);
    }catch (ex: any){
        return res.status(500).json({error:ex.message});
    }
});

router.put('/updTeam/:id', async (req, res) => {
    try {
        const {id = ''} = req.params;
        const {name = '', description = '', members = '', owner = '', status = ''} = req.body;
        const updatedTeam = await updateTeam(id, {name, description, members, owner, status});
        return res.json(updatedTeam);
    } catch (ex: any){
        return res.status(500).json({error: ex?.message});
    }
});

router.delete('/delTeam/:id', async (req, res) => {
    try {
        const {id = ''} = req.params;
        const deletedTeam = await deleteTeam(id);
        return res.json({delete: deletedTeam});
    } catch (ex: any){
        return res.status(500).json({error: ex?.message});
    }
});

export default router;

