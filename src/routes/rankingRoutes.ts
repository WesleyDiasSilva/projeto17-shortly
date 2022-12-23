import { Router } from 'express';
import { rankingController } from '../controllers/ranking/rankingController';

const route = Router();

route.get('/ranking', rankingController)

export default route;
