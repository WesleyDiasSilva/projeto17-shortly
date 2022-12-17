import { createUser } from '../../repositories/users/createUser';
import { layerResponse } from '../../types/typeServices';
import { newUser } from '../../types/users/typeUser';
import { createHashPassword } from '../../utils/createHashPassword';
import { serviceFindUser } from './serviceFindUser';

export async function serviceCreateUser(
  newUser: newUser
): Promise<layerResponse> {
  try {
    const { name, email, password } = newUser;
    const findUser = await serviceFindUser(email, 'email');
    console.log(findUser);
    if (findUser.response.message === undefined) {
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
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
