import { db } from './db';
import { users } from './schema';
export const saveUser = async (name: string, email: string, userId: string) => {
  const newUser = await db
    .insert(users)
    .values({ name, email, userId })
    .returning();
  console.log('newUser', newUser);
};
