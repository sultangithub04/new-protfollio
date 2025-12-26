"use server";



import { auth } from "@/app/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const updatePost = async (data: FormData) => {

  const session = await auth()
  const emailFromsession = session?.user?.email
  const resultData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromsession}`)
  const { data: user } = await resultData.json()
  const id = data.get("id") as string;

  const blogInfo = Object.fromEntries(data.entries());
  delete blogInfo.id;

  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: user?.id,
    isFeatured: Boolean(blogInfo.isFeatured),
  };
  console.log("datafrom update", modifiedData);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`, {
    method: "PATCH",
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
    redirect("/dashboard/update-blog");
  }
  
  return result;
};