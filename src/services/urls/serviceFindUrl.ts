import { findUrlById } from '../../repositories/urls/findUrlById';
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
    return { status: false, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
