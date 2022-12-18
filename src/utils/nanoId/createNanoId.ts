import { nanoid } from 'nanoid';

export function createNanoId(): string {
  const id = nanoid(10);
  return id;
}
