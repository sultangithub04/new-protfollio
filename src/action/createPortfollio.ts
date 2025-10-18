"use server";

import { auth } from "@/app/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export const createPortfollio = async (formdata: FormData) => {
  const session = await auth()
  const emailFromsession = session?.user?.email
  const resultData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromsession}`)
  const { data: user } = await resultData.json()


  const rawData = formdata.get("data") as string;
  const parsedData = JSON.parse(rawData);

  // 🔹 Step 4: Add ownerId to that data
  const modifiedData = {
    ...parsedData,
    ownerId: user?.id,
  };

  const newFormData = new FormData();
  newFormData.append("data", JSON.stringify(modifiedData));
  const file = formdata.get("file") as File | null;
  if (file) {
    newFormData.append("file", file);
  }


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    body: newFormData,
  });

  const result = await res.json();

  if (result?.data?.id) {
    revalidateTag("PROJECT");
    revalidatePath("/projects");
    redirect("/projects");
  }
  return result;
};