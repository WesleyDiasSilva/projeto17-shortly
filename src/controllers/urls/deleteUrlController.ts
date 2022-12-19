import { Request, Response } from 'express';
import { serviceDeleteUrl } from '../../services/urls/serviceDeleteUrl';

export async function deleteUrlController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const { user } = req.body;
    const deletedUrl = await serviceDeleteUrl(Number(id), user.id);
    if (deletedUrl.status) {
      return res.status(204).send();
    }
    if (deletedUrl.response.message.includes('url not found')) {
      return res.status(404).send(deletedUrl.response.message);
    }
    return res.status(401).send(deletedUrl.response.message);
  } catch (err) {
    return res.sendStatus(500);
  }
}
