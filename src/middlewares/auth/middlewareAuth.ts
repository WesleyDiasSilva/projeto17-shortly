import { NextFunction, Request, Response } from 'express';
import { validationToken } from '../../utils/jwt/validationToken';

export function middlewareAuth(
  req: Request,
  res: Response,
  next: NextFunction
): unknown {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send({ message: 'Token Invalid!' });
  }
  const token = authorization?.replace('Bearer ', '');
  const user = validationToken(token);
  if (user) {
    req.body.user = user;
    next();
    return;
  }
  return res.status(400).send({ message: 'Token Invalid!' });
}
