import cors from '@fastify/cors';
import fastify from 'fastify';

export default async () => {
  const app = fastify();

  app.register(cors, {
    credentials: true,
    origin: '*',
  });

  return app;
};
