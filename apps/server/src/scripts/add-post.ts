import { prisma } from 'db';

const addPost = async () => {
  const num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  await prisma.post.create({
    data: { title: `Post ${num}`, content: 'Lots of words' },
  });
};

addPost();
