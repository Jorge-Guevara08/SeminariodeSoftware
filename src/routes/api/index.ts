import express from 'express';
const router = express.Router();
import projectRouter from './projects';

router.use('/projects', projectRouter);

export default router;