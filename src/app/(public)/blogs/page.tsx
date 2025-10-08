/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "All Blog | Blog Page",
  description: "All blog built with Next.js, Tailwind CSS, and shadcn/ui.",
};
const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, { next: { tags: ["BLOGS"] } })
  const { data: blogs } = await res.json()

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center my-5 text-4xl font-bold text text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {blogs?.data?.map((blog: any) => (<BlogCard key={blog.id} post={blog} />))}</div>
    </div>
  );
};

export default AllBlogsPage;
