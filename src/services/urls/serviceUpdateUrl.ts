import { updateUrl } from '../../repositories/urls/updateUrl';
import { serviceNull } from '../../types/service/typeNull';

export async function serviceUpdateUrl(
  id: number,
  visit_number: number
): Promise<serviceNull> {
  try {
    const result = await updateUrl(id, visit_number);
    if (result.status) {
      return { status: true, response: { message: null } };
    }
    return { status: false, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
