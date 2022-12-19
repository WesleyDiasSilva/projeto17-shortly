import { Router } from 'express'
import { userMeController } from '../controllers/users/userMeController';

const route = Router();

route.get('/users/me', userMeController)

export default route;
