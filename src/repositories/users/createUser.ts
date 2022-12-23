import { connection } from '../../database/connection';
import { repositoryNull } from '../../types/repository/typeNull';
import { newUser } from '../../types/users/typeUser';

export async function createUser(user: newUser): Promise<repositoryNull> {
  try {
    const { name, email, password } = user;
    await connection.query(
      `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
    `,
      [name, email, password]
    );
    return { status: true, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
