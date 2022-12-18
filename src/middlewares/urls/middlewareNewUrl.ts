import { NextFunction, Request, Response } from 'express';
import { urlModel } from '../../models/urls/urlModel';

export function middlewareNewUrl(
  req: Request,
  res: Response,
  next: NextFunction
): unknown {
  const { url, clicks_goal } = req.body;
  const validation = urlModel.validate({ url });
  if (validation.error != null) return res.status(401).send(validation.error);
  if (!url.includes('http')) {
    return res.status(401).send('Please, send a url with http or https!');
  }
  try {
    const checkUrl = new URL(url);
    req.body.locals = { url: checkUrl, clicks_goal };
    next();
  } catch (err) {
    res.status(401).send('ERROR');
  }
}
