import { NextFunction, Request, Response } from 'express';
import { newUserModel } from '../../models/auth/newUserModel';

export function middlewareNewUser(
  req: Request,
  res: Response,
  next: NextFunction
): unknown {
  const { name, email, password, confirmPassword } = req.body;
  const validation = newUserModel.validate(
    {
      name,
      email,
      password,
      confirmPassword,
    },
    { abortEarly: false }
  );
  if (validation.error != null) {
    return res.status(422).send(validation.error);
  }
  if (password !== confirmPassword) {
    return res.status(422).send('Incorrect password and password confirmation');
  }
  req.body.locals = { name, email, password, confirmPassword };
  next();
}
