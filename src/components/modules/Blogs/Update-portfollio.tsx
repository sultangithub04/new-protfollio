/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCardEdit from "@/components/shared/ProjectCardEdit";





export default function UpdateProject({ projects }: any) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className=" mx-auto p-6 space-y-8">
      {/* Project List */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Manage My Projects</h2>
        <br />
        <div className="space-y-4">

          {/* <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12"> */}
          <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
            {projects.map((project: any, index: React.Key | null | undefined) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3 }}
              // transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCardEdit
                  key={project.id}
                  projectid={project.id}
                  features={project.features}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.thumbnail}
                  gitUrl={project.repoUrl}
                  previewUrl={project.projectUrl}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>


    </div>
  );
}
