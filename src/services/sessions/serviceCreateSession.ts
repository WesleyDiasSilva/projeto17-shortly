import { createSession } from '../../repositories/sessions/createSession';
import { findSession } from '../../repositories/sessions/findSession';
import { updateSession } from '../../repositories/sessions/updateSession';
import { layerResponse } from '../../types/typeServices';

export async function serviceCreateSession(
  token: string,
  id: number
): Promise<layerResponse> {
  try {
    const session = await findSession(id);
    if (session.status && (Boolean(session.response.message))) {
      const resp = await updateSession(token, id);
      console.log(resp);
      return { status: true, response: { message: null } };
    }
    const createdSession = await createSession(token, id);
    if (createdSession.status) {
      return { status: true, response: { message: null } };
    }
    return { status: false, response: { message: null } };
  } catch (err) {
    return { status: false, response: { message: err } };
  }
}
