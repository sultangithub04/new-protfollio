import { auth } from "@/app/auth";
import AdminSidebar from "@/components/modules/sidebar/AdminSidebar";
import SuperAdminSidebar from "@/components/modules/sidebar/SuperAdminSidebar";
import UserSidebar from "@/components/modules/sidebar/UserSidebar";





export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()
  const emailFromsession = session?.user?.email
  const resultData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromsession}`)
  const { data: user } = await resultData.json()
  const UserRole = user?.role




  return (
    <main className="min-h-dvh flex gap-4">
      {UserRole === "USER" && <UserSidebar/>}
      {UserRole === "ADMIN" && <AdminSidebar/>}
      {UserRole === "SUPER_ADMIN" && <SuperAdminSidebar/>}
      {/* <Sidebar /> */}


      {children}
    </main>
  );
}
