"use client";
import React from "react";
// import profile_img from "/public/images/profile.jpg";
import Link from "next/link";
import Image from 'next/image';
import Music from "@/components/about/music";
import Photography from "@/components/about/photography";
import Shelf from "../bookshelf/shelf";
import Bookshelf from "../bookshelf/page";
import BookDataDisplay from "@/components/bookshelf/BookData";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10 bg-white">
      
      <div className="flex flex-col items-center md:flex-row">
      
          <motion.div 
            className="relative p-2 md:p-5 m-0 md:m-5 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/profiles/grad_2023.jpg"
              width={1000}
              height={1000}
              className="object-cover animate-fadeIn rounded-lg"
              alt="Profile"
            />
          </motion.div>
        
        <div>
        <h1 className="text-4xl leading-5 p-5 ml-10 animate-fadeIn font-extrabold text-indigo-900 hover:text-purple-500 transition-colors duration-100">
            About Me
          </h1>

          <div className="flex flex-col p-5">
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              Hi there! I&apos;m Keerthana. I enjoy coding and building fun websites. I got my Bachelor&apos;s Degree at{" "}
              <Link href="https://www.purdue.edu/" className="text-purdue_color font-semibold underline transition duration-300 hover:text-blue-500">Purdue University</Link>{" "}
              studying Computer Science. Through the course of my degree, I have found a passion for using data visualization to make useful insights, building cool websites and also learning system design frameworks.
            </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">I&apos;m currently working for the <Link href="https://honors.purdue.edu/" className="text-purdue_color font-semibold underline transition duration-300 hover:text-blue-500">Purdue John Martinson Honors College</Link>{" "}
             this year to maintain, update and redesign their websites. Check out some examples of my work               <Link href="https://honors.purdue.edu/current-students/global/Global%20and%20Local%20Learning.php" className="text-purdue_color font-semibold underline transition duration-300 hover:text-blue-500">here!</Link>{" "}
             </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              I have been a Software Engineering Intern at{" "}
              <Link href="https://www.cummins.com/" className="text-cummins_color font-semibold underline transition duration-300 hover:text-blue-500">Cummins, Inc</Link>{" "}
              and also an Undergraduate Teaching Assistant for{" "}
              <Link href="https://datamine.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">The Data Mine</Link>{" "}
              and for the{" "}
              <Link href="https://www.cs.purdue.edu/undergraduate/bridge/" className="text-purdue_color font-semibold underline transition duration-300 hover:text-blue-500">CS Bridge Program</Link>{" "}
              at Purdue.
            </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              I have also had the opportunity to contribute as an Undergraduate Student Researcher for{" "}
              <Link href="https://datamine.purdue.edu/corporate/merck/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">Merck</Link>{" "}
              through the{" "}
              <Link href="https://datamine.purdue.edu/corporate/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">The Data Mine Corporate Partner&apos;s Program</Link>.
              I&apos;m involved in communities that empower women in engineering like{" "}
              <Link href="https://www.cs.purdue.edu/diversity/womens-history/girls-who-code.html" className="text-gwc_color font-semibold underline transition duration-300 hover:text-blue-500">Girls Who Code</Link>{", "}
              <Link href="https://rewritingthecode.org/" className="text-rtc_color font-semibold underline transition duration-300 hover:text-blue-500">Rewriting the Code</Link>{","} and the <Link href="https://swe.org/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">Society of Women Engineers</Link>{"."}
              
            </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              I&apos;m originally from Bangalore, India and enjoy playing guitar, reading, photography and exploring National Parks!
            </p>
          </div>
        </div>
      </div>
      
    </main>
  );
}
