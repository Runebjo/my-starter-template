import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 256 }).notNull().unique(),
  userId: varchar('user_id', { length: 256 }).notNull().unique(),
});
