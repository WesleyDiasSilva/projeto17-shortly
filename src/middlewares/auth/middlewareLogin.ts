import { NextFunction, Request, Response } from 'express';
import { loginModel } from '../../models/auth/loginModel';

export function middlewareLogin(
  req: Request,
  res: Response,
  next: NextFunction
): unknown {
  const { email, password } = req.body;
  const validation = loginModel.validate(
    { email, password },
    { abortEarly: false }
  );
  if (validation.error != null) {
    return res.status(422).send(validation.error);
  }
  req.body.locals = { email, password };
  next();
}
