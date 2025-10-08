import AboutSection from "@/components/about/AboutMe";

export default async function page () {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resume/4`, {cache:"no-store"})
  const { data } = await res.json()

  return (
    <div>
      <AboutSection data={data}/>
    </div>
  );
};