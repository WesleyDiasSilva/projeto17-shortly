import { getDataUser } from '../../repositories/users/getDataUser';
import { layerResponse } from '../../types/typeServices';

export async function serviceGetDataUser(id: number): Promise<layerResponse> {
  try {
    const data = await getDataUser(id);
    if (data.status) {
      return { status: true, response: { message: data.response.message } };
    }
    return { status: false, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
