import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);

export default defineConfig({
  schema: './utils/db/schema.ts',
  out: './utils/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
