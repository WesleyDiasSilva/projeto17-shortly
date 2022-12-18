import { updateUrl } from '../../repositories/urls/updateUrl';
import { layerResponse } from '../../types/typeServices';

export async function serviceUpdateUrl(
  id: number,
  visit_number: number
): Promise<layerResponse> {
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
