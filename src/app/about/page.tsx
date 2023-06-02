import React from "react";
import profile_img from "/public/images/profile.jpg";
import Link from "next/link";
import Image from 'next/image';
import Music from "@/components/about/music";
import Photography from "@/components/about/photography";
import Shelf from "../bookshelf/shelf";

export default function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 md:p-24 bg-white">
      <div className="flex flex-col items-center md:flex-row">
        <Image
          src="/images/profile_long.jpg"
          alt="profile_image"
          width={300}
          height={200}
          className="w-1/2 m-5 object-fit animate-fadeIn p-5"
        />
        <div>
          <h1 className="text-localhost_text text-4xl font-semibold mt-8 animate-fadeIn">
            About Me
          </h1>

          <div className="flex flex-col p-5">
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              Hi there! I'm Keerthana and I'm currently a senior at{" "}
              <Link href="https://www.purdue.edu/" className="text-purdue_color font-semibold underline transition duration-300 hover:text-blue-500">Purdue University</Link>{" "}
              studying Computer Science. I am driven by a curiosity to explore new technologies and find innovative solutions and am excited to continue my journey in computer science, constantly learning and growing.
            </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              I have been a Software Engineering Intern at{" "}
              <Link href="https://www.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">Cummins, Inc</Link>{" "}
              and have been an Undergraduate Teaching Assistant for{" "}
              <Link href="https://www.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">The Data Mine</Link>{" "}
              and for the{" "}
              <Link href="https://www.purdue.edu/" className="text-purdue_color font-semibold underline transition duration-300 hover:text-blue-500">CS Bridge Program</Link>{" "}
              at Purdue.
            </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              I have also had the opportunity to contribute as an Undergraduate Student Researcher for{" "}
              <Link href="https://www.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">Merck</Link>{" "}
              through the{" "}
              <Link href="https://www.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">The Data Mine Corporate Partner's Program</Link>.
              I also participated in the{" "}
              <Link href="https://www.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">Girls Who Code</Link>{" "}
              College Loop and as part of the{" "}
              <Link href="https://www.purdue.edu/" className="text-links_color font-semibold underline transition duration-300 hover:text-blue-500">TEDxPurdueU</Link>{" "}
              Logistics team, helped organize the 2020 TEDx event.
            </p>
            <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">
              I'm originally from Bangalore, India and enjoy songwriting, reading, hiking, and photography in my free time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <Music />
        <Photography />
      </div>
    </main>
  );
}
