import Link from "next/link";
import React from "react";
import Footer from "../footer/footer";

const Navbar: React.FC = () => {
  return (
    <main className="">
      <div className="flex items-center justify-center min-h-auto bg-gray-200">
        <div className="flex flex-col items-center m-10">
          <a href="/">
            <h1 className="text-localhost_text text-5xl font-large font-extrabold mb-4 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              Keerthana Vegesna
            </h1>
          </a>
          <ul className="flex space-x-4 text-localhost_text">

            <li className="text-lg text-indigo-900 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              <a href="/about">ABOUT</a>
            </li>

            <li className="text-lg text-indigo-900 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              <a href="/projects">PROJECTS</a>
            </li>
            <li className="text-lg text-indigo-900 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              <a href="/experience">EXPERIENCE</a>
            </li>
            <li className="text-lg text-indigo-900 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              <a href="/bookshelf">BOOKSHELF</a>
            </li>
            <li className="text-lg text-indigo-900 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
