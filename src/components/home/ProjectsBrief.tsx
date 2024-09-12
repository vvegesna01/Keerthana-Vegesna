"use client";
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { title } from "process";

const ProjectsGallery: React.FC = () => {
  const projects = [
    {
      title: "Investogram",
      imageSrc: "/images/projects/Investogram_profile.png",
      link: "/projects",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Purdue PAL",
      imageSrc: "/images/projects/purduePAL.png",
      link: "/projects",
      skills: ["Python", "Flask", "PostgreSQL"]
    },
    {
      title: "Eras Tour Tracker",
      imageSrc: "/images/projects/eras_tour.png",
      link: "/projects",
      skills: ["Python", "Node.js", "Typescript" , "OpenStreetMaps"]
    },
  ];

  return (
    <div className="w-full py-10 bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-indigo-900 text-center mb-8">Featured Projects</h1>

      <div className="w-full max-w-5xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              className="relative block bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Title
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              </div> */}


              {/* Project Image */}
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />

              

              

              {/* Skill Tags (Subtle, Minimal) */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-900 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
