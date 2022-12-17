import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function findUser(
  data: string,
  column: string
): Promise<layerResponse> {
  try {
    const userFound = await connection.query(
      `
    SELECT * FROM users WHERE $2 = $1
    `,
      [data, column]
    );
    return { status: true, response: { message: userFound.rows[0] } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
