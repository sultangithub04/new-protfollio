"use server";




import { auth } from "@/app/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const createPortfollio = async (data: FormData) => {
  const session = await auth()
  const emailFromsession = session?.user?.email
  const resultData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromsession}`)
  const { data: user } = await resultData.json()

  const projectInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...projectInfo,
    ownerId: user?.id,

  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.data?.id) {
    revalidateTag("PROJECT");
    revalidatePath("/projects");
    redirect("/projects");
  }
  return result;
};