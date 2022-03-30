import { prisma } from 'db';

export const startServer = async () => {
  console.log('startServer');

  const posts = await prisma.post.findMany();
  console.log('TOTAL POSTS IN DB: ', posts.length);
};

startServer();
