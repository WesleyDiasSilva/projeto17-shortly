import { Request, Response } from 'express';
import { serviceCreateShortUlr } from '../../services/urls/serviceCreateShortUrl';

export async function newUrlController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { origin } = req.body.locals.url;
    const { clicks_goal } = req.body.locals;
    const { id } = req.body.user;
    const createdShortUrl = await serviceCreateShortUlr(
      origin,
      id,
      clicks_goal
    );
    if (createdShortUrl.status) {
      return res.status(201).send(createdShortUrl.response.message);
    }
    return res.sendStatus(422);
  } catch {
    return res.sendStatus(500);
  }
}
