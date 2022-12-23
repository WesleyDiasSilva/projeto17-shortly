import { createRanking } from '../../repositories/ranking/createRanking';
import { serviceQuery } from '../../types/service/typeQuery';

export async function serviceCreateRanking(): Promise<serviceQuery> {
  try {
    const ranking = await createRanking();
    return { status: true, response: { message: ranking.response.message } };
  } catch {
    return { status: false, response: { message: [{}] } };
  }
}
