import { connection } from '../../database/connection';
import { repositoryQuery } from '../../types/repository/typeQuery';

export async function findSession(id: number): Promise<repositoryQuery> {
  try {
    const session = await connection.query(
      `
      SELECT * FROM sessions WHERE user_id = $1
    `,
      [id]
    );
    return { status: true, response: { message: session.rows } };
  } catch {
    return { status: false, response: { message: [{}] } };
  }
}
