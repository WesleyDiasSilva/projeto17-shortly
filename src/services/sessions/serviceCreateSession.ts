import { createSession } from '../../repositories/sessions/createSession';
import { findSession } from '../../repositories/sessions/findSession';
import { updateSession } from '../../repositories/sessions/updateSession';
import { serviceNull } from '../../types/service/typeNull';

export async function serviceCreateSession(
  token: string,
  id: number
): Promise<serviceNull> {
  try {
    const session = await findSession(id);
    if (session.status && Boolean(session.response.message)) {
      const resp = await updateSession(token, id);
      return { status: true, response: { message: null } };
    }
    const createdSession = await createSession(token, id);
    if (createdSession.status) {
      return { status: true, response: { message: null } };
    }
    return { status: false, response: { message: null } };
  } catch {
    return { status: false, response: { message: null } };
  }
}
