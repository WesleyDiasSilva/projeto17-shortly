import { createUser } from '../../repositories/users/createUser';
import { serviceMessage } from '../../types/service/typeMessage';
import { newUser } from '../../types/users/typeUser';
import { createHashPassword } from '../../utils/bcrypt/createHashPassword';
import { serviceFindUser } from './serviceFindUser';

export async function serviceCreateUser(
  newUser: newUser
): Promise<serviceMessage> {
  try {
    const { name, email, password } = newUser;
    const findUser = await serviceFindUser(email, 'email');
    if (findUser.response.message[0] === undefined) {
      const hash = await createHashPassword(password);
      const response = await createUser({ name, email, password: hash });
      if (response.status) {
        return { status: true, response: { message: 'New user created!' } };
      }
    }
    return {
      status: false,
      response: { message: 'Could not create new user, try again later!' },
    };
  } catch {
    return { status: false, response: { message: '' } };
  }
}
