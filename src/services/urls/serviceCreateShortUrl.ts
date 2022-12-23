import { createShortUrl } from '../../repositories/urls/createShortUrl';
import { serviceMessage } from '../../types/service/typeMessage';
import { createNanoId } from '../../utils/nanoId/createNanoId';

export async function serviceCreateShortUlr(
  url: string,
  id: number,
  clicks_goal?: number
): Promise<serviceMessage> {
  try {
    const nanoId = createNanoId();
    const response = await createShortUrl({
      url,
      user_id: id,
      short_url: nanoId,
      clicks_goal,
    });
    if (response.status) {
      return { status: true, response: { message: nanoId } };
    }
    return { status: false, response: { message: '' } };
  } catch {
    return { status: false, response: { message: '' } };
  }
}
