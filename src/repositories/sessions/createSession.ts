import { connection } from '../../database/connection';
import { repositoryNull } from '../../types/repository/typeNull';

export async function createSession(
  token: string,
  id: number
): Promise<repositoryNull> {
  try {
    await connection.query(
      `
  INSERT INTO sessions (token, user_id) VALUES ($1, $2)
  `,
      [token, id]
    );
    return { status: true, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
