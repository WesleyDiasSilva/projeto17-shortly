import { connection } from '../../database/connection';
import { repositoryQuery } from '../../types/repository/typeQuery';

export async function createRanking(): Promise<repositoryQuery> {
  try {
    const ranking = await connection.query(`
      SELECT u.id, u.name, COUNT(urls.user_id) AS "linksCount", SUM(urls.visit_number) AS "visitCount" FROM users u
      JOIN urls ON urls.user_id = u.id
      GROUP BY u.id;
    `);
    return { status: false, response: { message: ranking.rows } };
  } catch {
    return { status: false, response: { message: [{}] } };
  }
}
