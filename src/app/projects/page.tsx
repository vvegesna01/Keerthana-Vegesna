import React from "react";
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string; // Path to the image
  website: string; // Project website URL
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl condimentum, placerat lectus nec, euismod lorem.",
      image: "/images/project1.png",
      website: "https://www.example.com/project1",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl condimentum, placerat lectus nec, euismod lorem.",
      image: "/images/project2.png",
      website: "https://www.example.com/project2",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl condimentum, placerat lectus nec, euismod lorem.",
      image: "/images/project3.png",
      website: "https://www.example.com/project3",
    },
    // Add more projects here...
  ];

  return (
	<div className="flex flex-col p-24">
    <div className="space-y-6">
      <h1 className="text-localhost_text text-2xl font-semibold">PROJECTS</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center"
        >
          <div className="mr-6">
            <Image
              src={project.image}
              alt="Project"
              height={200}
              width={300}
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1 text-localhost_text">
            <div className="text-lg font-semibold text-gray-700">{project.title}</div>
            <div className="text-lg m-5">{project.description}</div>
            <div className="flex space-x-4">
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white rounded-full py-2 px-4 border border-blue-900 hover:bg-transparent hover:text-blue-900 hover:border-blue-900 transition duration-300">Source Code</a>
              {/* <button className="bg-blue-900 text-white rounded-full py-2 px-4 border border-blue-900 hover:bg-transparent hover:text-blue-900 hover:border-blue-900 transition duration-300">See More</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
	</div>
  );
};

export default Projects;
