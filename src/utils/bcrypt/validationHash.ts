import bcrypt from 'bcrypt';

export async function validateHash(
  password: string,
  hash: string
): Promise<boolean> {
  try {
    const validation = bcrypt.compareSync(password, hash);
    return validation;
  } catch {
    return false;
  }
}
