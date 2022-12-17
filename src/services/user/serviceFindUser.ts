import { findUser } from '../../repositories/users/findUser';
import { layerResponse } from '../../types/typeServices';

export async function serviceFindUser(
  data: string,
  method: string
): Promise<layerResponse> {
  try {
    const userFound = await findUser(data, method);
    return { status: true, response: { message: userFound.response.message } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
