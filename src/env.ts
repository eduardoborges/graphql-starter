import dotenv from 'dotenv';
import * as z from 'zod';

const DEFAULT_DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/postgres';

const env = z.object({

  // APP
  APP_PORT: z.string().default('3000'),
  APP_SECRET: z.string().min(10),
  // database
  DATABASE_URL: z.string().default(DEFAULT_DATABASE_URL),
  // env
  NODE_ENV: z.enum(['production', 'staging', 'development', 'test']).default('development'),
});

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : undefined,
});

const variables = env.parse(process.env);

Object.assign(process.env, variables);

export default variables;

// update typings
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
