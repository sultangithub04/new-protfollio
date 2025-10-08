import { auth } from "@/app/auth";


// import { getServerSession } from "next-auth/next";

export default async function HomePage() {
    const session = await auth()
console.log(session);
    return (
        <div>
            <h1>This is Home page component</h1>
         
        </div>
    );
};