import { ApolloServer } from '@apollo/server';
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { FastifyInstance } from 'fastify';

import { Context } from './context';
import { resolvers, typeDefs } from './schema';

export default async (app: FastifyInstance) => {
  const apollo = new ApolloServer<Context>({
    plugins: [fastifyApolloDrainPlugin(app)],
    resolvers,
    typeDefs,
  });
  return apollo;
};
