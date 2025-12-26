"use server";

import { auth } from "@/app/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const updateProject = async (data: FormData) => {
  // 🔐 auth user
  const session = await auth();
  const user = session?.user;

  if (!user) {
    throw new Error("Unauthorized");
  }

  // 🆔 get project id
  const id = data.get("id");
  if (!id) {
    throw new Error("Project id missing");
  }
  console.log(id);

  // 🧾 form data → object
  const projectInfo = Object.fromEntries(data.entries());
  delete projectInfo.id;

  // 🛠 modify data if needed
  const modifiedData = {
    ...projectInfo,
    // optional (if your backend checks owner)
  };

  console.log("data from update project:", modifiedData);

  // 🌐 API call
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    }
  );

  const result = await res.json();
  console.log("update result:", result);

  // ✅ success handling
  if (result?.data?.id) {
    // revalidateTag("PROJECTS"); // optional
    revalidatePath("/dashboard/manage-portfollio");
    redirect("/dashboard/manage-portfollio");
  }

  return result;
};
