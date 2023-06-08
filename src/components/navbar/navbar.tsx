"use client";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../footer/footer";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="">
      <div className="flex items-center justify-center min-h-auto bg-gray-200 p-5">

      <a href="/" className="m-10">
            <h1 className="text-localhost_text text-5xl font-large font-extrabold mb-4 transition duration-300 transform hover:-translate-y-1 hover:scale-100">
              Keerthana Vegesna
            </h1>
          </a>
        <div className="flex flex-col items-center m-10">
          
          <nav className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-indigo-900 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-120 m-5"
            >
              ☰
            </button>
          </nav>
          <ul className={`flex flex-col items-center ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row space-x-4 text-localhost_text`}>
            <li>
              <a href="/about" className="text-indigo-900 text-2xl hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-120">ABOUT</a>
            </li>
            <li>
              <a href="/projects" className="text-indigo-900 text-2xl hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-120">PROJECTS</a>
            </li>
            <li>
              <a href="/experience" className="text-indigo-900 text-2xl hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-120">EXPERIENCE</a>
            </li>
            <li>
              <a href="/bookshelf" className="text-indigo-900 text-2xl hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-120">BOOKSHELF</a>
            </li>
            <li>
              <a href="/contact" className="text-indigo-900 text-2xl hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition duration-300 transform hover:-translate-y-1 hover:scale-120">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
