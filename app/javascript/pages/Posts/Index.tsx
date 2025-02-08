import { Link } from '@inertiajs/react'

const Index = ({ posts }: { posts: any[] }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end">
      <Link href="/posts/new" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        New Post
        </Link>
      </div>
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
