import { Request, Response } from 'express';
import { serviceCreateUser } from '../../services/user/serviceCreateUser';

export async function signUpController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { name, email, password } = req.body.locals;
    const response = await serviceCreateUser({
      name,
      email,
      password,
    });
    if (response.status) {
      return res.sendStatus(201);
    }
    return res.status(409).send('This email already registered!');
  } catch (err) {
    return res.sendStatus(500);
  }
}
