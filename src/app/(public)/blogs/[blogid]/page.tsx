/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/PostServices";

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`)
    const { data: blogs } = await res.json()
    return blogs?.data?.slice(0, 2).map((blog: any) => ({
        blogid: String(blog.id)
    }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ blogid: string }> }) => {
    const { blogid } = await params
    const data = await getBlogById(blogid)
    const blog= data.data

    return {
        title: blog?.title,
        description: blog?.content
    }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ blogid: string }> }) {
    const { blogid } = await params

    const data = await getBlogById(blogid)
      const blog= data.data
    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <BlogDetailsCard blog={blog} />
        </div>
    );
};