import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';
import { newUser } from '../../types/users/typeUser';

export async function createUser(user: newUser): Promise<layerResponse> {
  try {
    const { name, email, password } = user;
    await connection.query(
      `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
    `,
      [name, email, password]
    );
    return { status: true, response: { message: 'OK' } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
