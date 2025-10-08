/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const skills = {
  Frontend: ["HTML & CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
  Backend: ["Node.js", "Express.js", "Prisma", "GraphQL", "Docker"],
  Databases: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
  Tools: ["Firebase", "JWT Authentication", "Axios", "Redux", "AWS"],
};

const TAB_DATA:any[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <section className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="">
              <h3 className="font-semibold text-purple-400">{category}</h3>
              <ul className="mt-3 space-y-1 text-gray-100">
                {list.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>M.Sc, B.Sc (Honors) in Physics</li>
        <li>University of Rajshahi, Bangladesh</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Web Development form programing hero</li>
        <li>Next Level Web development form programing hero</li>
        <li>JavaScripts from upwork</li>
        <li>wordpress from upwork</li>
        <li>CCNA</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
if(isPending){
  console.log("test");
}
  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };




  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base">
            I’m Sultan, a passionate Full-Stack Web Developer skilled in frontend and backend technologies like React.js, Next.js, Node.js, Express.js, Prisma, PostgreSQL, MongoDB, Docker, AWS, and many more — crafting ideas into engaging online experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
