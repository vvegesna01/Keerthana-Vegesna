import React from "react";
import Image from 'next/image';

interface Experience {
  duration: string;
  company: string;
  role: string;
  description: string[];
  image: string; // Path to the image
}

const Experiences: React.FC = () => {
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
      role: "Undergraduate Data Science Researcher | Merck RFID Team",
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
    <div className="space-y-6">
      <h1 className="text-4xl leading-10 ml-10 animate-fadeIn font-extrabold text-indigo-900 hover:text-purple-500 transition-colors duration-100">EXPERIENCE</h1>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-89 h-100 sm:w-40 sm:h-40 overflow-hidden">
              <Image
                src={experience.image}
                alt="Experience"
                height={2080}
                width={2080}
                objectFit="cover"
              />
            </div>
            <div className="text-center sm:text-left p-5">
              <div className="text-lg font-semibold text-gray-700">{experience.duration}</div>
              <div className="text-localhost_text text-xl font-bold">{experience.company}</div>
              <div className="text-lg font-semibold text-gray-700">{experience.role}</div>
              <ul className="text-localhost_text text-lg mt-2 list-disc list-inside">
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
