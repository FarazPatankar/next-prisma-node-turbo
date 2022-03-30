import { GetStaticProps } from 'next';
import { prisma } from 'db';

const Web = ({ posts }: { posts: any }) => {
  return (
    <div>
      <h1>Web</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany({});
  return {
    props: { posts: posts.map((post) => ({ id: post.id, title: post.title })) },
  };
};

export default Web;
