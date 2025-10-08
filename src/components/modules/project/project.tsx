/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
const Projects = ({dataProject}:any) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-24 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {dataProject.map((project: { id: React.Key | null | undefined; title: string; description: string; thumbnail: string; repoUrl: string; projectUrl: string; }, index: React.Key | null | undefined) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
            // transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.thumbnail}
              gitUrl={project.repoUrl}
              previewUrl={project.projectUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;