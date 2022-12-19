import { deleteUrl } from '../../repositories/urls/deleteUrl';
import { findUrlById } from '../../repositories/urls/findUrlById';
import { layerResponse } from '../../types/typeServices';

export async function serviceDeleteUrl(
  url_id: number,
  user_id: number
): Promise<layerResponse> {
  try {
    const foundUrl = await findUrlById(url_id);
    if (!foundUrl.response.message) {
      return { status: false, response: { message: 'url not found' } };
    }
    const url = foundUrl.response.message;
    if (url.user_id === user_id) {
      const result = await deleteUrl(url_id);
      if (result.status) {
        return { status: true, response: { message: null } };
      }
      return { status: false, response: { message: null } };
    }
    return {
      status: false,
      response: { message: 'url does not belong to logged in user' },
    };
  } catch {
    return { status: false, response: { message: null } };
  }
}
