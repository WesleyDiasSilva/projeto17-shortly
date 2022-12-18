import { Router } from 'express';
import { getUrlByIdController } from '../controllers/urls/getUrlByIdController';
import { newUrlController } from '../controllers/urls/newUrlController';
import { middlewareAuth } from '../middlewares/auth/middlewareAuth';
import { middlewareNewUrl } from '../middlewares/urls/middlewareNewUrl';

const route = Router();

route.get('/urls/:id', getUrlByIdController);
route.use(middlewareAuth);
route.post('/urls/shorten', middlewareNewUrl, newUrlController);

export default route;
