import { Link } from '@inertiajs/react'
const Show = ({ post }: { post: any }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.body}</p>
      <Link href="/posts" className="mt-4 hover:underline">Back to posts</Link>
    </div>
  );
};

export default Show;
