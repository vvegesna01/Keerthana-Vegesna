"use client";
import ExperiencesBrief from '@/components/home/ExpBrief';
import ProfileBrief from '@/components/home/ProfileBrief';
import ProjectsGallery from '@/components/home/ProjectsBrief';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10 overflow-x-hidden">
      <div>
{/* Scroll Buttons */}
<div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 sm:space-y-3 md:space-y-4">
  <button
    onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
    className="w-4 h-4 bg-indigo-900 rounded-full shadow-lg transition-colors duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
  />
  <button
    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
    className="w-4 h-4 bg-indigo-900 rounded-full shadow-lg transition-colors duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
  />
  <button
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    className="w-4 h-4 bg-indigo-900 rounded-full shadow-lg transition-colors duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
  />
</div>



        <motion.div
          id="profile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <ProfileBrief />
        </motion.div>

        <motion.div
        id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <ExperiencesBrief />

        </motion.div>
        <motion.div
        id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <ProjectsGallery />
        </motion.div>

        {/* Text Section with Waving Hand and Arrow */}
        <div className="relative flex flex-col items-center mt-10">
          <h1 className="text-localhost_text text-xl leading-10 p-10 animate-fadeIn w-3/4 text-center">
            I&apos;m currently actively looking for full-time opportunities in
            <span className="highlight-bg"> Software Engineering</span>, 
            <span className="highlight-bg"> Data Analytics</span>{', '}
            and <span className="highlight-bg"> Geospatial Tech</span>.
            I would love to connect and grow my network, so reach out to me{' '}
            <Link href="/contact" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">
              here! {" "}
            </Link>
          </h1>
        </div>
      </div>
    </main>
  );
}
