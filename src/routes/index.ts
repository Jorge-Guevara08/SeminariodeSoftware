import express from 'express';
const router  = express.Router();

router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

 router.get('/test', (_req, res) => {  //el primer objeto hace la solicitud y el segundo permite configurar, definir y agregar valor a lo que pide el cliente
  res.json({msg:'Hello Test!'});
 });



export default router;
