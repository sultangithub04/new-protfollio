import Projects from "@/components/modules/project/project";

export default async function ProjectsSection() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, { next:{tags:["PROJECT"]} })
  const { data: projectData } = await res.json()



  return (
    <div>
      <Projects dataProject={projectData} />
    </div>
  );
}