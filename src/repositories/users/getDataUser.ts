import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';

export async function getDataUser(id: number): Promise<layerResponse> {
  try {
    const data = await connection.query(
      `
      SELECT u.id, u.name, SUM(urls.visit_number) AS "visitCount" FROM users u
      JOIN urls ON urls.user_id = u.id
      WHERE u.id = $1
      GROUP BY u.id;
    `,
      [id]
    );
    const shorteneds = await connection.query(
      `
      SELECT u.id, u.short_url, u.url, u.visit_number FROM urls u WHERE u.user_id = $1
    `,
      [id]
    );

    return {
      status: true,
      response: { message: { data: data.rows[0], shortenedUrls: shorteneds.rows } },
    };
  } catch (err) {
    console.log(err);
    return { status: false, response: { message: null } };
  }
}
