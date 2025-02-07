import { Link } from '@inertiajs/react'

const Index = ({ posts }: { posts: any[] }) => {
  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="mb-4">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            <h1 className="text-2xl font-bold">{post.title}</h1>
          </Link>
          <p className="text-gray-500">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
