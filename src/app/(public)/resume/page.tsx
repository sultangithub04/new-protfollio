import { auth } from "@/app/auth";
import ResumeView from "@/components/modules/resume/ResumeView";



const defaultData = {
  userId: 1,
  contactInfo: {
    fullName: "Sultan Ahamad",
    email: "sult_04@yahoo.com",
    phone: "01750000469",
    address: "Uttara, Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/sultan",
    github: "https://github.com/sultangithub04",
  },
  workExperience: [
    {
      company: "OpenAI",
      position: "Software Engineer",
      startDate: "2022-01-01",
      endDate: "2024-01-01",
      responsibilities: [
        "Built scalable APIs with Node.js and Prisma",
        "Integrated authentication and authorization",
        "Improved system performance by 30%",
      ],
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      startDate: "2020-05-01",
      endDate: "2021-12-31",
      responsibilities: [
        "Developed portfolio websites with Next.js",
        "Designed and deployed REST/GraphQL APIs",
        "Worked with MongoDB and PostgreSQL",
      ],
    },
  ],
  education: [
    {
      institution: "University of Dhaka",
      degree: "B.Sc. in Computer Science",
      startDate: "2016-01-01",
      endDate: "2020-12-31",
      details: "Specialized in Software Engineering",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "React",
    "Next.js",
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-06-01",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "2022-10-01",
    },
  ],
};

export default async function ResumePage() {

 const session = await auth()
  const emailFromsession = session?.user?.email
  const resultData = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${emailFromsession}`)
  const { data: user } = await resultData.json()


  const id = user?.id
  let resumeData = defaultData;
  if (id) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resume/${id}`, { cache: "no-store" });
      const json = await res.json();

      if (res.ok && json?.data) {
        resumeData = json.data; // use fetched resume
      }
    } catch (error) {
      console.error("Failed to fetch resume:", error);
      // defaultData will be used
    }
  }

  return <ResumeView data={resumeData} />;
}
