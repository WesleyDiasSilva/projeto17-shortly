import { Router } from 'express';
import { signInController } from '../controllers/auth/signInController';
import { signUpController } from '../controllers/auth/signUpController';
import { middlewareLogin } from '../middlewares/auth/middlewareLogin';
import { middlewareNewUser } from '../middlewares/auth/middlewareNewUser';

const route = Router();

route.post('/signup', middlewareNewUser, signUpController);
route.post('/signin', middlewareLogin, signInController);

export default route;
