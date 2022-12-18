import jwt from 'jsonwebtoken';

export function validationToken(token: string): unknown {
  try {
    const validationToken = jwt.verify(token, process.env.JWT_PASS ?? '');
    return validationToken;
  } catch {
    return null;
  }
}
