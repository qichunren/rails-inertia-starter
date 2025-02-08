import { Link } from '@inertiajs/react'
import Layout from '../../components/Layout'

const Show = ({ post }: { post: any }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.content}</p>

      <div className="flex justify-end gap-2">
        <Link href={`/posts/${post.id}/edit`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:underline">Edit</Link>
        <Link href={`/posts/${post.id}`} method="delete" className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:underline">Delete</Link>
        <Link href="/posts" className="mt-4 hover:underline">Back to posts</Link>
      </div>
    </div>
  );
};

Show.layout = (page: any) => <Layout>{page}</Layout>

export default Show;
