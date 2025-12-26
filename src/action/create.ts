"use server";



import { auth } from "@/app/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const create = async (data: FormData) => {

  const session = await auth()
  const emailFromsession = session?.user?.email
  const resultData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromsession}`)
  const { data: user } = await resultData.json()

  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: user?.id,
    isFeatured: Boolean(blogInfo.isFeatured),
  };
  console.log(modifiedData);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  console.log(result);
  if (result?.data?.id) {
    // revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }
  
  return result;
};