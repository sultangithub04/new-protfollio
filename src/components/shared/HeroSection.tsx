"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Button } from "@/components/ui/button"
const HeroSection = () => {
  // const skills = {
  //   Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "Next.js"],
  //   Backend: ["Node.js", "Express.js", "Prisma", "GraphQL", "Docker"],
  //   Databases: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
  //   Tools: ["Firebase", "JWT Authentication", "Axios", "Redux", "AWS"],
  // };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, i am Sultan{" "}
            </span>
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
              Hi, I am Sultan
            </span> */}
            <br></br>
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Next.js ",
                1000,
                "react.js ",
                1000,
                "node.js ",
                1000,
                "prisma ",
                1000,
                "graphQL ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A Full-Stack Web Developer. Welcome to my digital playground! I am Sultan, a passionate Full-Stack Web Developer dedicated to turning your ideas into captivating online experiences. Skills that set me apart include frontend and backend development: HTML, CSS, JavaScript, TypeScript, TailwindCSS, Firebase, JWT, Axios, React.js, Next.js, Node.js, Express.js, Prisma, Docker, AWS, GraphQL, Redux, MongoDB, Mongoose, SQL, PostgreSQL, and many more.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
   
            <a
              href="/cv.pdf"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
