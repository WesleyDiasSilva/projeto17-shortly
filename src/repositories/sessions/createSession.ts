import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function createSession(
  token: string,
  id: number
): Promise<layerResponse> {
  try {
    await connection.query(
      `
  INSERT INTO sessions (token, user_id) VALUES ($1, $2)
  `,
      [token, id]
    );
    return { status: true, response: { message: null } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
