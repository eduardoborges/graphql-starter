import { Context } from '../../context';

export default {
  Query: {
    users: async (_parent: any, { id }: any, { prisma }: Context) => prisma.user.findMany(),
  },
};
