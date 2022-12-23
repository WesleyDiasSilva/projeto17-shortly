import { serviceQueryAndSendEmail } from '../../types/service/typeQueryAndSendEmail';
import { serviceFindUrl } from './serviceFindUrl';
import { serviceUpdateUrl } from './serviceUpdateUrl';

export async function serviceOpenUrl(
  short_url: string
): Promise<serviceQueryAndSendEmail> {
  try {
    const foundUrl = await serviceFindUrl(short_url, 'short_url');
    if (foundUrl.status) {
      const { id, visit_number, clicks_goal, email, name, url } =
        foundUrl.response.message[0];
      const updatedUrl = await serviceUpdateUrl(id, visit_number + 1);
      if (!updatedUrl.status) {
        return { status: false, response: { message: url, sendEmail: false } };
      }
      if (clicks_goal - visit_number === 1) {
        return {
          status: true,
          response: {
            message: [foundUrl.response.message[0]],
            sendEmail: true,
          },
        };
      }
      return {
        status: true,
        response: {
          message: [foundUrl.response.message[0]],
          sendEmail: false,
        },
      };
    }
    return { status: false, response: { message: [{}], sendEmail: false } };
  } catch {
    return { status: false, response: { message: [{}], sendEmail: false } };
  }
}
