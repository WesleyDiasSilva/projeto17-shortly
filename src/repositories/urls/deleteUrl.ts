import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function deleteUrl(id: number): Promise<layerResponse> {
  try {
    await connection.query(
      `
    DELETE FROM urls WHERE id = $1;
    `,
      [id]
    );
    return { status: true, response: { message: null } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
