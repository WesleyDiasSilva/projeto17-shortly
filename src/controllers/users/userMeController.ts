import { Request, Response } from 'express';
import { serviceGetDataUser } from '../../services/user/serviceGetDataUser';

export async function userMeController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { user } = req.body;
    const dataOfUser = await serviceGetDataUser(user.id);
    const response = {
      id: dataOfUser.response.message.data.id,
      name: dataOfUser.response.message.data.name,
      visitCount: dataOfUser.response.message.data.visitCount,
      shortenedUrls: dataOfUser.response.message.shortenedUrls,
    };
    if (dataOfUser.status) {
      return res.send(response);
    }
    return res.status(404).send();
  } catch {
    return res.sendStatus(500);
  }
}
