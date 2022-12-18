import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function findSession(id: number): Promise<layerResponse> {
  try {
    const session = await connection.query(
      `
      SELECT * FROM sessions WHERE user_id = $1
    `,
      [id]
    );
    return { status: true, response: { message: session.rows[0] } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
