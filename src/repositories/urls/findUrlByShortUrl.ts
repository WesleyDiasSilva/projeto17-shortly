import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function findShortUrl(short_url: string): Promise<layerResponse> {
  try {
    const foundUrl = await connection.query(
      `
      SELECT urls.*, users.email, users.name FROM urls
      JOIN users ON users.id = urls.user_id
      WHERE urls.short_url = $1;
    `,
      [short_url]
    );
    return { status: true, response: { message: foundUrl.rows[0] } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
