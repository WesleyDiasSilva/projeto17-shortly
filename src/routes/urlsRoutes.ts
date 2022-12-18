import { Router } from 'express';
import { getUrlByIdController } from '../controllers/urls/getUrlByIdController';
import { newUrlController } from '../controllers/urls/newUrlController';
import { openUrlController } from '../controllers/urls/openUrlController';
import { middlewareAuth } from '../middlewares/auth/middlewareAuth';
import { middlewareNewUrl } from '../middlewares/urls/middlewareNewUrl';

const route = Router();

route.get('/urls/:id', getUrlByIdController);
route.get('/urls/open/:shortUrl', openUrlController);
route.use(middlewareAuth);
route.post('/urls/shorten', middlewareNewUrl, newUrlController);

export default route;
