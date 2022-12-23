import { findUrlById } from '../../repositories/urls/findUrlById';
import { findShortUrl } from '../../repositories/urls/findUrlByShortUrl';
import { serviceQuery } from '../../types/service/typeQuery';

export async function serviceFindUrl(
  params: string | number,
  method: 'short_url' | 'id'
): Promise<serviceQuery> {
  try {
    if (method === 'id') {
      const id = Number(params);
      const foundUrl: any = await findUrlById(id);
      if (foundUrl.status) {
        return {
          status: true,
          response: { message: foundUrl.response.message },
        };
      }
      return {
        status: false,
        response: { message: [{}] },
      };
    }
    if (method === 'short_url') {
      const short = String(params);
      const foundUrl = await findShortUrl(short);
      if (foundUrl.status && foundUrl.response.message) {
        return {
          status: true,
          response: { message: foundUrl.response.message },
        };
      }
      return { status: false, response: { message: [{}] } };
    }
    return { status: false, response: { message: [{}] } };
  } catch {
    return { status: false, response: { message: [{}] } };
  }
}
