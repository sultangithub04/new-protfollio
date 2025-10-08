import UpdateBlog from "@/components/modules/Blogs/Update-blog";

export default async function ManageBalog() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, { next: { tags: ["BLOGS"] } })
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