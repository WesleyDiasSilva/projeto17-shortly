import { connection } from '../../database/connection';
import { repositoryUserFound } from '../../types/repository/typeUserFound';

export async function findUser(
  data: string,
  column: string
): Promise<repositoryUserFound> {
  try {
    const userFound = await connection.query(
      `
    SELECT * FROM users WHERE email = $1
    `,
      [data]
    );

    return { status: true, response: { message: userFound.rows } };
  } catch {
    return { status: false, response: { message: [{}] } };
  }
}
