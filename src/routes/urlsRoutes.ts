import { Router } from 'express';
import { newUrlController } from '../controllers/urls/newUrlController';
import { middlewareAuth } from '../middlewares/auth/middlewareAuth';
import { middlewareNewUrl } from '../middlewares/urls/middlewareNewUrl';

const route = Router();

route.use(middlewareAuth);
route.post('/urls/shorten', middlewareNewUrl, newUrlController);

export default route;
