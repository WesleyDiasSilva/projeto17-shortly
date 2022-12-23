import { connection } from '../../database/connection';
import { repositoryNull } from '../../types/repository/typeNull';

export async function updateSession(
  token: string,
  id: number
): Promise<repositoryNull> {
  try {
    await connection.query(
      `
    UPDATE sessions SET token=$1 WHERE user_id=$2;
    `,
      [token, id]
    );
    return { status: true, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
