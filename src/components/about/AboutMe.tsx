/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/components/shared/TabButton";




const skills = {
    Frontend: ["HTML & CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
    Backend: ["Node.js", "Express.js", "Prisma", "GraphQL", "Docker"],
    Databases: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
    Tools: ["Firebase", "JWT Authentication", "Axios", "Redux", "AWS"],
};

const TAB_DATA:any = [
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

// function getAboutData() {
//     // Future এ API থেকে আনতে পারো, এখন static data দিচ্ছি
//     return {
//         name: "Sultan Ahamad",
//         email: "sultan@example.com",
//         phone: "+880123456789",
//         location: "Dhaka, Bangladesh",
//         bio: "I am a passionate Full Stack Developer specializing in building scalable web applications using Next.js, Node.js, and modern databases. I love solving problems and learning new technologies.",
//         skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Prisma", "PostgreSQL", "MongoDB"],
//     };
// }
const AboutSection = ({data}:any) => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    if(isPending){
        console.log("error");
    }

    const handleTabChange = (id: React.SetStateAction<string>) => {
        startTransition(() => {
            setTab(id);
        });
    };




    return (
        <section className="text-white pt-20">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500} alt="image" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base">
                        I’m Sultan, a passionate Full-Stack Web Developer skilled in frontend and backend technologies like React.js, Next.js, Node.js, Express.js, Prisma, PostgreSQL, MongoDB, Docker, AWS, and many more — crafting ideas into engaging online experiences.
                    </p>
                    <div className="flex flex-row justify-start mt-8 ">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {""}
                            Skills{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {""}
                            Education{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {""}
                            Certifications{""}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t: { id: string; }) => t.id === tab).content}
                    </div>
                </div>
            </div>

            {/* <AboutMe data={aboutData} /> */}
            {data&& (<section className="max-w-4xl mx-auto p-6">
                {/* Personal Info */}
                <div className="mb-6 text-center">
                    <h1 className="text-4xl font-bold mb-2">{data?.contactInfo?.fullName}</h1>
                    <p className="text-gray-600">{data.contactInfo.address}</p>
                    <p className="text-gray-600">{data.contactInfo.phone}</p>
                    <p className="text-blue-600 underline">
                        <a href={`mailto:${data.contactInfo.email}`}>{data.contactInfo.email}</a>
                    </p>
                    <div className="flex justify-center gap-4 mt-2">
                        <a
                            href={data.contactInfo.linkedin}
                            target="_blank"
                            className="text-blue-600 underline"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={data.contactInfo.github}
                            target="_blank"
                            className="text-blue-600 underline"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                            <span
                                key={idx}
                                className="bg-purple-600 px-3 py-1 rounded-md text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Work Experience */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
                    {data.workExperience.map((job: { position: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; company: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; startDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; endDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; responsibilities: any[]; }, idx: React.Key | null | undefined) => (
                        <div key={idx} className="mb-4 border-l-4 border-blue-500 pl-4">
                            <h3 className="text-lg font-medium">
                                {job.position} - {job.company}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {job.startDate} - {job.endDate}
                            </p>
                            <ul className="list-disc list-inside mt-1">
                                {job.responsibilities.map((resp: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    {data.education.map((edu: { degree: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; institution: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; startDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; endDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; details: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
                        <div key={idx} className="mb-4 border-l-4 border-green-500 pl-4">
                            <h3 className="text-lg font-medium">{edu.degree}</h3>
                            <p className="text-gray-500">{edu.institution}</p>
                            <p className="text-sm text-gray-500">
                                {edu.startDate} - {edu.endDate}
                            </p>
                            <p>{edu.details}</p>
                        </div>
                    ))}
                </div>
            </section>)}
        </section>
    );
};

export default AboutSection;