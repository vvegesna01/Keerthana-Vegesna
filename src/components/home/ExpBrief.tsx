"use client";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

interface Experience {
  duration: string;
  company: string;
  role: string;
  description: string[];
  image: string; // Path to the image
}

const ExperiencesBrief: React.FC = () => {

	const experiences: Experience[] = [
		{
		  duration: "JUN 2022 - AUG 2022",
		  company: "CUMMINS, INC",
		  role: "Software Engineering Intern",
		  description: ["Worked on the Data Acquisition team to implement monitoring systems for existing applications. Gained experience with AWS services including CloudWatch Alarms, S3 and Lambda Functions."],
		  image: "/images/exp/cummins-logo-round.jpeg",
		},
		{
		  duration: "AUG 2021 - JAN 2022",
		  company: "THE DATA MINE - MERCK",
		  role: "Undergraduate Data Science Researcher",
		  description: ["Collaborated with Merck to create a web-based inventory tracking system using QR codes to optimize drug development. Worked on the backend team to setup a common database using AWS S3 and databricks to analyze the data. Helped come up with the solution architecture for the implementation."],
		  image: "/images/exp/Merck.png",
		},
		{
		  duration: "AUG 2021 - JAN 2022",
		  company: "THE DATA MINE - PURDUE UNIVERSITY",
		  role: "Undergraduate Teaching Assistant",
		  description: ["Assisted over 600 students in The Data Mine during office hours. Helped students with assignments on Bash, SQL, Unix, R, Python and SQL"],
		  image: "/images/exp/dm_dr_photo.jpeg",
		},
		// Add more experiences here...
	];

  return (
    <div className="flex justify-center py-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="overflow-hidden w-48 h-48 rounded">
            <Image
              src={experience.image}
              alt="Experience"
              layout="responsive"
              width={192}
              height={192}
              objectFit="cover"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-bold text-gray-900">{experience.company}</h2>
            <p className="text-sm text-gray-500">{experience.duration}</p>
            <h3 className="text-base font-semibold text-gray-900">{experience.role}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperiencesBrief;
