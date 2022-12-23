import { connection } from '../../database/connection';
import { repositoryNull } from '../../types/repository/typeNull';

export async function deleteUrl(id: number): Promise<repositoryNull> {
  try {
    await connection.query(
      `
    DELETE FROM urls WHERE id = $1;
    `,
      [id]
    );
    return { status: true, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
