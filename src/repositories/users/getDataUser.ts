import { connection } from '../../database/connection';
import { repositoryDoubleQuery } from '../../types/repository/typeDoubleQuery';

export async function getDataUser(id: number): Promise<repositoryDoubleQuery> {
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
      response: {
        message: { userInfo: data.rows, shortenedUrls: shorteneds.rows },
      },
    };
  } catch (err) {
    return {
      status: false,
      response: {
        message: { userInfo: [{}], shortenedUrls: [{}] },
      },
    };
  }
}
