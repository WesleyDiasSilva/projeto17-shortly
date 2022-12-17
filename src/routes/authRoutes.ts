import { Router } from 'express';
import { signUpController } from '../controllers/auth/signUpController';
import { middlewareNewUser } from '../middlewares/auth/middlewareNewUser';

const route = Router();

route.post('/signup', middlewareNewUser, signUpController);
route.post('/signin');

export default route;
