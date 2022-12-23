import { connection } from '../../database/connection';
import { repositoryUrlQuery } from '../../types/repository/typeUrlQuery';

export async function findUrlById(id: number): Promise<repositoryUrlQuery> {
  try {
    const url = await connection.query(
      `
    SELECT * FROM urls WHERE id = $1;
    `,
      [id]
    );
    return { status: true, response: { message: url.rows } };
  } catch {
    return {
      status: false,
      response: {
        message: [
          {
            id: -1,
            url: '',
            short_url: '',
            user_id: -1,
            visit_number: -1,
            clicks_goal: -1,
          },
        ],
      },
    };
  }
}
