"use client";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

interface Experience {
  duration: string;
  company: string;
  role: string;
  image: string;
}

const ExperiencesBrief: React.FC = () => {

  const experiences: Experience[] = [
    {
      duration: "JAN 2024 - Present",
      company: "JOHN MARTINSON HONORS COLLEGE",
      role: "Web Developer",
      image: "/images/exp/honors_logo.png",
    },
    {
      duration: "JUN 2022 - AUG 2022",
      company: "CUMMINS, INC",
      role: "Software Engineering Intern",
      image: "/images/exp/cummins-logo-round.jpeg",
    },
    {
      duration: "AUG 2021 - JAN 2022",
      company: "THE DATA MINE - MERCK",
      role: "Undergraduate Data Science Researcher",
      image: "/images/exp/Merck.png",
    },
    {
      duration: "AUG 2021 - JAN 2022",
      company: "THE DATA MINE",
      role: "Undergraduate Teaching Assistant",
      image: "/images/exp/dm_dr_photo.jpeg",
    },
    {
      duration: "MAY 2021 - AUG 2021",
      company: "PURDUE CS DEPARTMENT",
      role: "UTA | CS Bridge Program",
      image: "/images/exp/lawson_loop.jpg",
    },
  ];

  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-4xl font-bold text-indigo-900 text-center mb-8">Experience</h1>

      {/* Carousel for All Screens */}
      <motion.div
        className="flex overflow-x-scroll space-x-4 m-10"
        drag="x"
        dragConstraints={{ left: -200 * experiences.length, right: 0 }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-48 sm:w-60 bg-white border border-gray-300 rounded-lg shadow-md p-4 sm:p-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={experience.image}
                alt={experience.company}
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">{experience.company}</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-2">{experience.duration}</p>
              <h3 className="text-md sm:text-lg font-semibold text-indigo-900">{experience.role}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperiencesBrief;
