"use client";

import { createPortfollio } from "@/action/createPortfollio";
import Form from "next/form";


export default function CreatePortfollioForm() {
  return (
    <Form
      action={createPortfollio}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Create Project</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="My Portfolio Website"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="slug">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          required
          placeholder="my-portfolio-website"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          placeholder="A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript..."
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="features">
          Features (comma separated)
        </label>
        <input
          type="text"
          id="features"
          name="features"
          placeholder="Next.js 14, Tailwind CSS, Dark Mode"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnail"
          name="thumbnail"
          placeholder="https://example.com/images/project.png"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Project URL */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="projectUrl">
          Live Project URL
        </label>
        <input
          type="url"
          id="projectUrl"
          name="projectUrl"
          placeholder="https://myproject.vercel.app"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Repo URL */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="repoUrl">
          Repository URL
        </label>
        <input
          type="url"
          id="repoUrl"
          name="repoUrl"
          placeholder="https://github.com/username/project"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </Form>
  );
}
