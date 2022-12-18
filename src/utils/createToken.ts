import jwt from 'jsonwebtoken';
import { dataJWT } from '../types/jwt/typeJwt';

export function createToken(data: dataJWT): string {
  const secret = process.env.JWT_PASS;
  const sevenDays = 60 * 24 * 7;
  const config = { expiresIn: sevenDays };
  const token = jwt.sign(data, secret ?? '', config);
  return token;
}
