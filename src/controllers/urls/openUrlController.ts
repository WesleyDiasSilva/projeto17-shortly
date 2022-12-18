import { Request, Response } from 'express';
import { serviceOpenUrl } from '../../services/urls/serviceOpenUrl';

export async function openUrlController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { shortUrl } = req.params;
    const openUrl = await serviceOpenUrl(shortUrl);
    console.log(openUrl);
    if (openUrl.status) {
      res.redirect(openUrl.response.message);
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
