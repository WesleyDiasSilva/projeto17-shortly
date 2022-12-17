import bcrypt from 'bcrypt';

export async function createHashPassword(password: string): Promise<string> {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
}
