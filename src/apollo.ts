import { ApolloServer } from '@apollo/server';
import fastifyApollo, { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { FastifyInstance } from 'fastify';

import context, { Context } from './context';
import { resolvers, typeDefs } from './schema';

export default async (app: FastifyInstance) => {
  const apollo = new ApolloServer<Context>({
    plugins: [fastifyApolloDrainPlugin(app)],
    resolvers,
    typeDefs,
  });

  await apollo.start();
  await app.register(fastifyApollo(apollo), {
    context,
  });

  return apollo;
};
