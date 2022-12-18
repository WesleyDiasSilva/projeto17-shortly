import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function findShortUrl(short_url: string): Promise<layerResponse> {
  try {
    const foundUrl = await connection.query(
      `
      SELECT * FROM urls WHERE short_url = $1;
    `,
      [short_url]
    );
    return { status: true, response: { message: foundUrl.rows } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
