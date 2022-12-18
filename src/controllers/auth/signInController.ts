import { Request, Response } from 'express';
import { serviceLogin } from '../../services/user/serviceLogin';

export async function signInController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { email, password } = req.body.locals;
    const canLogin = await serviceLogin(email, password);
    if (canLogin.status) {
      return res.status(200).send(canLogin.response.message);
    }
    return res.status(409).send(canLogin.response.message);
  } catch {
    return res.sendStatus(500);
  }
}
