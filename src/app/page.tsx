"use client";
import ExperiencesBrief from '@/components/home/ExpBrief';
import ProfileBrief from '@/components/home/ProfileBrief';
import ProjectsGallery from '@/components/home/ProjectsBrief';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div>
        <ProfileBrief />
        <ExperiencesBrief />
        <ProjectsGallery />

        {/* Text Section with Waving Hand and Arrow */}
        <div className="relative flex flex-col items-center mt-10">
          <h1 className="text-localhost_text text-xl leading-10 p-10 animate-fadeIn w-3/4 text-center">
            I'm currently actively looking for full-time opportunities in
            <span className="highlight-bg"> Software Engineering</span>, 
            <span className="highlight-bg"> Data Analysis</span>{', '}
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
