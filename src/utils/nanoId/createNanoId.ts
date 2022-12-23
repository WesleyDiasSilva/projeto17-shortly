import crypto from 'crypto';

export function createNanoId(): string {
  const id = crypto.randomUUID().slice(0, 8);
  console.log('dentro da função');
  console.log(id);
  return id;
}
