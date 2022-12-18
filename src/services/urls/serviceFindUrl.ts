import { findUrlById } from '../../repositories/urls/findUrlById';
import { findShortUrl } from '../../repositories/urls/findUrlByShortUrl';
import { layerResponse } from '../../types/typeServices';

export async function serviceFindUrl(
  params: string | number,
  method: 'email' | 'short_url' | 'user_id' | 'id'
): Promise<layerResponse> {
  try {
    if (method === 'id') {
      const id = Number(params);
      const foundUrl = await findUrlById(id);
      if (foundUrl.status) {
        return {
          status: true,
          response: { message: foundUrl.response.message },
        };
      }
      return {
        status: false,
        response: { message: null },
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
      return { status: false, response: { message: null } };
    }
    return { status: false, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
