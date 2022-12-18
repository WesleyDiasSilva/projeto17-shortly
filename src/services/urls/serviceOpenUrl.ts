import { layerResponse } from '../../types/typeServices';
import { serviceFindUrl } from './serviceFindUrl';
import { serviceUpdateUrl } from './serviceUpdateUrl';

export async function serviceOpenUrl(
  short_url: string
): Promise<layerResponse> {
  try {
    const foundUrl = await serviceFindUrl(short_url, 'short_url');
    if (foundUrl.status) {
      const { id, visit_number, clicks_goal, email, name, url } =
        foundUrl.response.message;
      const updatedUrl = await serviceUpdateUrl(id, visit_number + 1);
      if (!updatedUrl.status) {
        return { status: false, response: { message: url, sendEmail: false } };
      }
      if (clicks_goal - visit_number === 1) {
        return {
          status: true,
          response: { message: { clicks_goal, email, name, url }, sendEmail: true },
        };
      }
      return { status: true, response: { message: url, sendEmail: false } };
    }
    return { status: false, response: { message: null, sendEmail: false } };
  } catch {
    return { status: false, response: { message: null, sendEmail: false } };
  }
}
