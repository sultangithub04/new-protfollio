
"use client";

import { updatePost } from "@/action/updatePost";
import Form from "next/form";
import { useState } from "react";
import toast from "react-hot-toast";


type Blog = {
  id: number;
  title: string;
  tags: string;
  thumbnail: string;
  content: string;
  author: { name: string };
  createdAt: string;
};

type UpdateBlogProps = {
  blogData: Blog[];
};

export default function UpdateBlog({ blogData }: UpdateBlogProps) {
  const [isFeatured, setIsFeatured] = useState("false");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState<Blog>({
    id: 0,
    title: "",
    content: "",
    tags: "",
    thumbnail: "",
    author: { name: "" },
    createdAt: "",
  });

  const openEditModal = (blog: Blog) => {
    setEditBlog(blog);
    setIsModalOpen(true);
  };

  const handleDelete = async (blogId: number) => {
    const toastId = toast.loading("Removing...");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        next: { tags: ["BLOGS"] },
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        toast.success("Blog deleted", { id: toastId });
        window.location.reload();
      } else {
        toast.error(data?.message || "Failed to remove", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Blog List */}
      <section>
        <h2 className="text-xl font-bold mb-4">My Blogs</h2>
        <div className="space-y-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                by {blog.author.name} • {new Date(blog.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-700 mb-3">{blog.content.slice(0, 120)}...</p>
              <div className="flex gap-4">
                <button onClick={() => openEditModal(blog)} className="text-blue-600 hover:underline">
                  Edit
                </button>
                <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}

          {blogData.length === 0 && <p className="text-center text-gray-500">No blogs yet.</p>}
        </div>
      </section>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <Form action={updatePost} className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Update Blog</h2>

              <input type="hidden" name="id" value={editBlog.id} />

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={editBlog.title}
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-1">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  defaultValue={editBlog.content}
                  rows={4}
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="thumbnail" className="block text-sm font-medium mb-1">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  id="thumbnail"
                  name="thumbnail"
                  defaultValue={editBlog.thumbnail}
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium mb-1">
                  Tags (comma separated)
                </label>
                <input
                  id="tags"
                  name="tags"
                  defaultValue={editBlog.tags}
                  type="text"
                  placeholder="Next.js, React, Web Development"
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <p className="block text-sm font-medium mb-1">Featured</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="isFeatured"
                      value="true"
                      checked={isFeatured === "true"}
                      onChange={(e) => setIsFeatured(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="isFeatured"
                      value="false"
                      checked={isFeatured === "false"}
                      onChange={(e) => setIsFeatured(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}

