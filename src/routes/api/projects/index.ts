import express from 'express';   // estos es estandar
const router = express.Router();

import { createProject, getProject, updateProject, deleteProject } from '@libs/projects/projects';

router.get('/', (_req, res) => {
    res.json({ version: 1, scope: 'projects' });
});

// /appi/projects/echo/hola?variable1=a&variable2=b

router.get('/echo/:msg', (req, res) => {
    const { msg } = req.params;
    const { variable1 = 'Hola', variable2 = 'Mundo' } = req.query;
    res.json({ msg, variable1, variable2 });
});

router.post('/echo2/', (req, res) => {
    const { variable1 = 'Hola', variable2 = 'Mundo' } = req.body;
    res.json({ variable1, variable2 });
});

router.get('/all', async (_req, res) => {
    const projects = await getProject();
    res.json(projects);
});

router.post('/new', async (req, res) => {
    const { name = '', description = '', isActive = false } = req.body;
    const newProject = { name, description, isActive: (isActive && true) };
    const createdProject = await createProject(newProject);
    res.json(createdProject);
});

router.put('/upd/:id', (req, res) => {
    const projectId = req.params.id;
    const { name = '', description = ''} = req.body;
    const updatedProject = updateProject(projectId, { name, description});
    res.json(updatedProject);
  });


  router.delete('/del/:id', (req, res) => {
    const projectId = req.params.id;
    const result = deleteProject(projectId);
    res.json({ result});
  })

export default router; // y esto tambien