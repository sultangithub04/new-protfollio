import { auth } from "@/app/auth";
import UpdateBlog from "@/components/modules/Blogs/Update-blog";


// {{URL}}/post?email=bangla@gmail.com
export default async function page() {
    const session = await auth()
    const emailFromsession = session?.user?.email
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post?email=${emailFromsession}`, { next: { tags: ["BLOGS"] } })
    const { data: blogs } = await res.json()
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, { next: { tags: ["BLOGS"] } })
    // const { data: blogs } = await res.json()
    const blogData = blogs.data
    console.log(blogs.data);
    return (
        <div>
            <UpdateBlog blogData={blogData} />
        </div>
    );
};