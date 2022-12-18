import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function findUrlById(id: number): Promise<layerResponse> {
  try {
    const url = await connection.query(
      `
    SELECT * FROM urls WHERE id = $1;
    `,
      [id]
    );
    return { status: true, response: { message: url.rows[0] } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
