import express from 'express';
const router = express.Router();

import projectRouter from './projects';
import securityRouter from './security';
import teamsRouter from './teams';

router.use('/projects', projectRouter);
router.use('/security', securityRouter);
router.use('/teams', teamsRouter);



export default router;