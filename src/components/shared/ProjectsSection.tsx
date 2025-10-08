"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Restaurant Website",
    description: "Restaurant management site",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sultangithub04/restaurant-client",
    previewUrl: "https://restaurant-a10-ph.web.app",
  },
  {
    id: 2,
    title: "Employee Management",
    description: "For Employee management of office",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-sultangithub04",
    previewUrl: "https://emis-a12.web.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project sports selling site",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sultangithub04/sports-client",
    previewUrl: "https://lotus-a10.web.app",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 2 user roll using react.js, firebase and mongodb",
    image: "/images/projects/15.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sultangithub04/bistro-boss-client",
    previewUrl: "https://bistro-boss-ph.web.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "React Firebase with career counseling",
    description: "Authentication and CRUD operations",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/programming-hero-web-course1/b10-a9-authentication-sultangithub04",
    previewUrl: "https://career-counseling-assignment.web.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap Next.js",
    description: "Project  next.js applying crud with mongodb",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sultangithub04/carDoctor",
    previewUrl: "https://nextjs-car-doctor-green.vercel.app/",
  },
  {
    id: 7,
    title: "Digital wallet project with react.js",
    description: "Digital wallet system with react.js",
    image: "/images/projects/quickpay.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sultangithub04/quickpayfont",
    previewUrl: "https://quickpayfont.vercel.app",
  },
  {
    id: 8,
    title: "Full-stack project React.js",
    description: "Picture Generate by AI",
    image: "/images/projects/picseek.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sultangithub04/pic-seek-client.",
    previewUrl: "https://crack-ai-server-40a76.web.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
