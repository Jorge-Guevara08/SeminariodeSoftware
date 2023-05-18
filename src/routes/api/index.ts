import express from 'express';
const router = express.Router();

import projectRouter from './projects';
import securityRouter from './security';


router.use('/projects', projectRouter);
router.use('/security', securityRouter);


export default router;