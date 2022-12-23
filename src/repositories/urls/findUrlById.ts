import { connection } from '../../database/connection';
import { repositoryUrlQuery } from '../../types/repository/typeUrlQuery';

export async function findUrlById(id: number): Promise<repositoryUrlQuery> {
  try {
    const { rows } = await connection.query(
      `
    SELECT * FROM urls WHERE id = $1;
    `,
      [id]
    );

    console.log(rows);
    return { status: true, response: { message: rows } };
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
            created_at: new Date(),
          },
        ],
      },
    };
  }
}
