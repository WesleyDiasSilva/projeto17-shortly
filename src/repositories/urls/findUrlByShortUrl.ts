import { connection } from '../../database/connection';
import { repositoryQuery } from '../../types/repository/typeQuery';

export async function findShortUrl(
  short_url: string
): Promise<repositoryQuery> {
  try {
    const foundUrl = await connection.query(
      `
      SELECT urls.*, users.email, users.name FROM urls
      JOIN users ON users.id = urls.user_id
      WHERE urls.short_url = $1;
    `,
      [short_url]
    );
    return { status: true, response: { message: foundUrl.rows } };
  } catch (err) {
    return { status: false, response: { message: [{}] } };
  }
}
