import { Context } from '../../context';

function users(_parent: unknown, _args: unknown, context: Context) {
  return context.prisma.user.findMany();
}

export default {
  Query: {
    users,
  },
};
