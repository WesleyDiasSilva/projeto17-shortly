import { Request, Response } from 'express';
import { serviceOpenUrl } from '../../services/urls/serviceOpenUrl';

export async function openUrlController(
  req: Request,
  res: Response
): Promise<unknown> {
  try {
    const { shortUrl } = req.params;
    const openUrl = await serviceOpenUrl(shortUrl);
    if (openUrl.status) {
      res.redirect(openUrl.response.message[0].url);
      if (openUrl.response.sendEmail) {
        console.log('Envia o email');
      }
      return;
    }
    return res.status(404).send();
  } catch {
    return res.sendStatus(500);
  }
}
