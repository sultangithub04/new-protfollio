import UpdatePortfollio from "@/components/modules/Blogs/Update-portfollio";


export default async function ManagePortfollio() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const { data: projects } = await res.json()
    
    console.log(projects);
    return (
        <div>
            <UpdatePortfollio projects={projects} />

        </div>
    );
};