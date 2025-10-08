"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";


export default function ToastHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const loginStatus = searchParams.get("login");
    if (loginStatus === "success") {
  
        toast.success("User Logged in Successfully");
        window.history.replaceState({}, document.title, "/dashboard");
    }
  }, [searchParams]);

  return null; // render nothing
}
