import React from "react";
import Image from 'next/image';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col p-10">
      <div className="space-y-6">
        <h1 className="text-4xl leading-10 ml-10 animate-fadeIn font-extrabold text-indigo-900 hover:text-purple-500 transition-colors duration-100">PROJECTS</h1>

        {/* Investogram */}
        <div className="">
        
          <div className="flex items-center">
            <div className="w-1/2 mr-5">
              <Image
                src="/images/projects/investogram_profile.png"
                alt="Project"
                height={600}
                width={800}
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-1/2 text-center sm:text-left text-localhost_text">
            <div className="text-3xl font-semibold text-gray-700">Investogram</div>
              {/* <div className="text-3xl font-semibold text-gray-700">Investogram</div> */}
              <ul className="text-localhost_text text-lg mt-2 list-disc list-inside">
                <li className="mb-2">An app for beginner traders to start with play money and interact with the stock market to learn about investing.</li>
                <li className="mb-2">Built with MongoDB Backend and React, Next.js frontend.</li>
                <li className="mb-2">Features include making, commenting, and liking posts on your feed from your friends.</li>
                <li className="mb-2">A Personal Dashboard showing useful metrics like total portfolio value, money invested, all previous trades, and current holdings.</li>
                <li>Leaderboard incentives to get better at investing.</li>
              </ul>
              <div className="flex space-x-4 m-3">
                <a href="https://github.com/CS-407/Investogram-Frontend" target="_blank" rel="noopener noreferrer" className="bg-indigo-900 text-white rounded-full py-2 px-4 border border-indigo-900 hover:bg-transparent hover:text-indigo-900 hover:border-indigo-900 transition duration-300">Source Code</a>
                <a href="https://docs.google.com/presentation/d/1m5OFbwTUwbOdZnJzoAFLw9boNMa-b-4CzSh_a33uPkQ/edit" className="bg-indigo-900 text-white rounded-full py-2 px-4 border border-indigo-900 hover:bg-transparent hover:text-indigo-900 hover:border-indigo-900 transition duration-300">Demo Slides</a>
              </div>
            </div>
          </div>
        </div>

        {/* Purdue PAL */}
        <div className="">
        
          <div className="flex items-center">
            <div className="w-1/2 mr-5">
              <Image
                src="/images/projects/purduePAL.png"
                alt="Project"
                height={600}
                width={800}
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-1/2 text-center sm:text-left text-localhost_text">
              <div className="text-3xl font-semibold text-gray-700">PurduePAL</div>
              <ul className="text-localhost_text text-lg mt-2 list-disc list-inside">
                <li>A social media app for Purdue Students to connect with other students.</li>
                <li>Built with React frontend and Python, MongoDB Backend.</li>
                <li>Features include liking, commenting, and making posts.</li>
                <li>Users can follow pages they are interested in and see them on their main feed.</li>
                <li>Users can also post anonymously if preferred.</li>
                <li>Profile customization options with profile picture, bio, and username.</li>
              </ul>
              <div className="flex space-x-4 m-3">
                <a href="https://github.com/CS307Spring2022/PurduePAL-Backend" target="_blank" rel="noopener noreferrer" className="bg-indigo-900 text-white rounded-full py-2 px-4 border border-indigo-900 hover:bg-transparent hover:text-indigo-900 hover:border-indigo-900 transition duration-300">Source Code</a>
                
                {/* <button className="bg-blue-900 text-white rounded-full py-2 px-4 border border-blue-900 hover:bg-transparent hover:text-blue-900 hover:border-blue-900 transition duration-300">Demo Slides</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
