import { getDataUser } from '../../repositories/users/getDataUser';
import { serviceQuery } from '../../types/service/typeQuery';

export async function serviceGetDataUser(id: number): Promise<serviceQuery> {
  try {
    const data = await getDataUser(id);
    if (data.status) {
      return { status: true, response: { message: [data.response.message] } };
    }
    return { status: false, response: { message: [{}] } };
  } catch {
    return { status: false, response: { message: [{}] } };
  }
}
