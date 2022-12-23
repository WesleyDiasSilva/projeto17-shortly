import { Request, Response } from 'express';
import { serviceCreateRanking } from '../../services/ranking/serviceCreateRanking';

export async function rankingController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const ranking = await serviceCreateRanking();
    return res.status(200).send(ranking.response.message);
  } catch {
    return res.sendStatus(500);
  }
}
