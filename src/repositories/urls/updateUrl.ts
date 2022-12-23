import { connection } from '../../database/connection';
import { repositoryNull } from '../../types/repository/typeNull';

export async function updateUrl(
  id: number,
  visit_number: number
): Promise<repositoryNull> {
  try {
    await connection.query(
      `
      UPDATE urls SET visit_number = $2 WHERE id = $1;
    `,
      [id, visit_number]
    );
    return { status: true, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
