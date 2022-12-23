import { findUser } from '../../repositories/users/findUser';
import { serviceQuery } from '../../types/service/typeQuery';

export async function serviceFindUser(
  data: string,
  method: string
): Promise<serviceQuery> {
  try {
    const userFound = await findUser(data, method);

    return { status: true, response: { message: userFound.response.message } };
  } catch (err) {
    return { status: false, response: { message: [{}] } };
  }
}
