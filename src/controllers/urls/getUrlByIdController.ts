import { Request, Response } from 'express';
import { serviceFindUrl } from '../../services/urls/serviceFindUrl';

export async function getUrlByIdController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const foundUrl = await serviceFindUrl(id, 'id');
    if (!foundUrl.status) {
      return res.status(404).send('url not found!');
    }
    if (foundUrl.response.message) {
      const responseBody = {
        id: foundUrl.response.message.id,
        shortUrl: foundUrl.response.message.short_url,
        url: foundUrl.response.message.url,
      };
      return res.status(200).send(responseBody);
    }
    return res.status(404).send('url not found!');
  } catch {
    return res.sendStatus(500);
  }
}
