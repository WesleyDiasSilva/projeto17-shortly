import { serviceMessage } from '../../types/service/typeMessage';
import { validateHash } from '../../utils/bcrypt/validationHash';
import { createToken } from '../../utils/jwt/createToken';
import { serviceCreateSession } from '../sessions/serviceCreateSession';
import { serviceFindUser } from './serviceFindUser';

export async function serviceLogin(
  email: string,
  passwordCompare: string
): Promise<serviceMessage> {
  try {
    const foundUser = await serviceFindUser(email, 'email');

    if (foundUser.response.message[0] !== undefined) {
      const { id, name, password } = foundUser.response.message[0];
      const validation = await validateHash(passwordCompare, password);
      if (validation) {
        const token = createToken({ name, id });
        const sessionCreated = await serviceCreateSession(token, id);
        if (sessionCreated.status) {
          return { status: true, response: { message: token } };
        }
        return { status: false, response: { message: '' } };
      }
    }
    return {
      status: false,
      response: { message: 'email or password invalid!' },
    };
  } catch {
    return { status: false, response: { message: '' } };
  }
}
