import { ApolloFastifyContextFunction } from '@as-integrations/fastify';

import prisma from './prisma';

export interface Context {
  prisma: typeof prisma;
}

const context: ApolloFastifyContextFunction<Context> = async (_request, _reply) => ({
  prisma,
});

export default context;
