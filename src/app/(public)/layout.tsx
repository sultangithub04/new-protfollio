import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-[#121212] ">

      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </main>
    </>
  );
}
