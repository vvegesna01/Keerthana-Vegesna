"use client";
import React from "react";
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProfileBrief: React.FC = () => {
  return (
    <div className="flex flex-col items-center m-5">
      {/* Container for image and text */}
      <div className="flex flex-col items-center md:flex-row">

        {/* Profile Image with hover effect */}
        <div className="md:w-1/4 w-full flex justify-center md:justify-start">
          <motion.div 
            className="relative p-2 md:p-10 m-0 md:m-5 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/profiles/profile_met_2024.jpg"
              width={500}
              height={500}
              className="object-cover animate-fadeIn rounded-lg"
              alt="Profile"
            />
          </motion.div>
        </div>
        
        {/* Typewriter and Intro Text */}
        <div className="md:w-3/4">
          <h1 className="align-center text-l leading-10 animate-fadeIn font-bold text-indigo-900 hover:text-purple-500 transition-colors duration-300">
            <Typewriter
              words={['SOFTWARE ENGINEER', 'UNDERGRAD TA', 'MUSICIAN', 'WEB DEVELOPER', 'DATA ANALYST', 'UNDERGRAD RESEARCHER']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          
          {/* Intro text with animated highlight on hover */}
          <h1 className="text-localhost_text text-2xl leading-10 mt-5 p-10 animate-fadeIn">
            Hi! I&apos;m Keerthana. I&apos;m passionate about using data visualization to make information more accessible <sup className="text-linkedin_color">^ and fun!</sup>{" "}, building cool websites, and documenting books I&apos;m reading!
            <br /><br />
            Take a peek at my{" "}
            <Link href="/projects">
              <span className="highlight-bg">Projects</span>
            </Link> 
            {" "} and {" "}
            <Link href="/experience">
              <span className="highlight-bg">Experience</span>
            </Link>
            {" "} pages to see what I&apos;ve been up to!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileBrief;
