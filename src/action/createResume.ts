"use server"


import { auth } from "@/app/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createResume = async (data: FormData) => {
  // Get user session
  const session = await auth();
  const emailFromSession = session?.user?.email;

  if (!emailFromSession) {
    throw new Error("User not logged in");
  }

  // Fetch user by email
  const userRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromSession}`);
  if (!userRes.ok) {
    throw new Error("Failed to fetch user data");
  }
  const { data: user } = await userRes.json();

  // Convert FormData to object
  const formObj: Record<string, FormDataEntryValue> = Object.fromEntries(data.entries());

  // Helper function to safely split strings from FormDataEntryValue
  const splitString = (value: FormDataEntryValue | undefined): string[] => {
    if (typeof value === "string" && value.length > 0) {
      return value.split(",").map((s) => s.trim());
    }
    return [];
  };

  const modifiedData = {
    userId: user?.id,
    contactInfo: {
      fullName: (formObj["contactInfo[fullName]"] as string) || "",
      email: (formObj["contactInfo[email]"] as string) || "",
      phone: (formObj["contactInfo[phone]"] as string) || "",
      address: (formObj["contactInfo[address]"] as string) || "",
      linkedin: (formObj["contactInfo[linkedin]"] as string) || "",
      github: (formObj["contactInfo[github]"] as string) || "",
    },
    workExperience: [
      {
        company: (formObj["workExperience[0][company]"] as string) || "",
        position: (formObj["workExperience[0][position]"] as string) || "",
        startDate: (formObj["workExperience[0][startDate]"] as string) || "",
        endDate: (formObj["workExperience[0][endDate]"] as string) || "",
        responsibilities: splitString(formObj["workExperience[0][responsibilities]"]),
      },
      {
        company: (formObj["workExperience[1][company]"] as string) || "",
        position: (formObj["workExperience[1][position]"] as string) || "",
        startDate: (formObj["workExperience[1][startDate]"] as string) || "",
        endDate: (formObj["workExperience[1][endDate]"] as string) || "",
        responsibilities: splitString(formObj["workExperience[1][responsibilities]"]),
      },
    ],
    education: [
      {
        institution: (formObj["education[0][institution]"] as string) || "",
        degree: (formObj["education[0][degree]"] as string) || "",
        startDate: (formObj["education[0][startDate]"] as string) || "",
        endDate: (formObj["education[0][endDate]"] as string) || "",
        details: (formObj["education[0][details]"] as string) || "",
      },
    ],
    skills: splitString(formObj["skills"]),
    certifications: [
      {
        name: (formObj["certifications[0][name]"] as string) || "",
        issuer: (formObj["certifications[0][issuer]"] as string) || "",
        date: (formObj["certifications[0][date]"] as string) || "",
      },
      {
        name: (formObj["certifications[1][name]"] as string) || "",
        issuer: (formObj["certifications[1][issuer]"] as string) || "",
        date: (formObj["certifications[1][date]"] as string) || "",
      },
    ],
  };

  // Post the resume
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resume`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedData),
  });

  if (!res.ok) {
    throw new Error("Failed to create resume");
  }

  const result = await res.json();

  if (result?.data?.id) {
    // revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/resume");
  }

  return result;
};
