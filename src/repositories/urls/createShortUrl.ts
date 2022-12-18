import { connection } from '../../database/connection';
import { layerResponse } from '../../types/typeServices';
import { urlType } from '../../types/urls/typeUrl';

export async function createShortUrl(
  urlObject: urlType
): Promise<layerResponse> {
  const { url, short_url, user_id, clicks_goal } = urlObject;
  try {
    if (clicks_goal !== undefined) {
      await connection.query(
        `
        INSERT INTO urls (url, short_url, user_id, clicks_goal) VALUES ($1, $2, $3, $4)
      `,
        [url, short_url, user_id, clicks_goal]
      );
      return { status: true, response: { message: null } };
    } else {
      await connection.query(
        `
        INSERT INTO urls (url, short_url, user_id) VALUES ($1, $2, $3)
      `,
        [url, short_url, user_id]
      );
    }

    return { status: true, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
