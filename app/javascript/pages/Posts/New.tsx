import { useState } from "react";
import { Link } from "@inertiajs/react";
import { router } from '@inertiajs/react'

const New = ({ errors, post }: { errors: any, post: any }) => {
    const [values, setValues] = useState({
        title: post.title,
        content: post.content,
      })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = e.target.id
        const value = e.target.value
        setValues((values) => ({
            ...values,
            [key]: value,
        }))
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.post('/posts', values)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">New Post</h1>
      <div className="flex justify-end">
        <Link href="/posts" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Back to Posts
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 rounded-md p-2"
            value={values.title}
            onChange={handleChange}
          />
          {errors && errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="body">Body</label>
          <textarea
            id="content"
            name="content"
            className="border border-gray-300 rounded-md p-2"
            value={values.content}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;
