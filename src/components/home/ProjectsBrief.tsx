"use client";
import React, { useState } from "react";
import Image from 'next/image';

const ProjectCarousel: React.FC = () => {
  const projects = [
    {
      title: "Investogram",
      imageSrc: "/images/projects/Investogram_profile.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/projects"
    },
    {
      title: "Purdue PAL",
      imageSrc: "/images/projects/purduePAL.png",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      link: "/projects"
    },
  ];

  const [currentProject, setCurrentProject] = React.useState(0);

  const handleClickPrev = () => {
    setCurrentProject((prevProject) => (prevProject === 0 ? projects.length - 1 : prevProject - 1));
  };

  const handleClickNext = () => {
    setCurrentProject((prevProject) => (prevProject === projects.length - 1 ? 0 : prevProject + 1));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2">
        <h1 className="ml-20 text-3xl leading-10 animate-fadeIn font-extrabold text-indigo-900 hover:text-purple-500 transition-colors duration-300">Project Carousel</h1>
        <div className="flex flex-col p-10 items-center">
          <div className="relative w-4/5">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-900 rounded-full p-3 hover:bg-gray-300 transition duration-300"
              onClick={handleClickPrev}
            >
              Previous
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-900 rounded-full p-3 hover:bg-gray-300 transition duration-300"
              onClick={handleClickNext}
            >
              Next
            </button>
            <div className="flex justify-center">
              <div className="flex items-center space-x-12">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      index === currentProject ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                    }`}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-black">{project.title}</h2>
                    <div className="w-96 h-72">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        width={"400"}
                        height={"300"}
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-lg text-center text-black">{project.description}</p>
                    <a href={project.link} className="mt-4 text-blue-500 hover:underline">View Project</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
