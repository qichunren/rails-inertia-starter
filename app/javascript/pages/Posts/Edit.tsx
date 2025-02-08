import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const Edit = ({ post, errors }: { post: any, errors: any }) => {
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
    router.put(`/posts/${post.id}`, values)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <div className="flex justify-end">
        <Link href={`/posts/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:underline">Back to post</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" className="border border-gray-300 rounded-md p-2" value={values.title} onChange={handleChange} />
          {errors && errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" className="border border-gray-300 rounded-md p-2" value={values.content} onChange={handleChange} />
          {errors && errors.content && <p className="text-red-500">{errors.content}</p>}
        </div>
        <div className="mt-4 flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update Post</button>
        </div>
      </form>
    </div>
  )
}

export default Edit