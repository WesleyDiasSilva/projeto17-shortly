import { Request, Response } from 'express';
import { serviceGetDataUser } from '../../services/user/serviceGetDataUser';

export async function userMeController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { user } = req.body;
    const dataOfUser: any = await serviceGetDataUser(user.id);
    const response = {
      id: dataOfUser.response.message[0].userInfo[0].id,
      name: dataOfUser.response.message[0].userInfo[0].name,
      visitCount: dataOfUser.response.message[0].userInfo[0].visitCount,
      shortenedUrls: dataOfUser.response.message[0].shortenedUrls,
    };
    if (dataOfUser.status) {
      return res.send(response);
    }
    return res.status(404).send();
  } catch {
    return res.sendStatus(500);
  }
}
