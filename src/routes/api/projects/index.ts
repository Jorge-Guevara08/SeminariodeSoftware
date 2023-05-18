import express from 'express';   // estos es estandar
const router = express.Router();

router.get('/', (_req, res) => {
    res.json({version:1, scope:'projects'});
});

export default router; // y esto tambien