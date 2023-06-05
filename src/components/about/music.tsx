import React from "react";
import Link from "next/link";

export default function Music() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl leading-10 ml-10 animate-fadeIn font-extrabold text-indigo-900 hover:text-purple-500 transition-colors duration-100">Music</h1>

      <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn m-3">
        I spend my free time songwriting, singing, and honing my guitar skills. I also upload covers and original songs on my{" "}
        <Link
          href="https://www.youtube.com/channel/UC3jv-V2sKktWbd16ISmz2WQ"
          className="text-xl text-links_color underline hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition transform hover:-translate-y-1 hover:scale-100"
        >
          YouTube channel!
        </Link>
      </p>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 animate-fadeIn">
        <iframe 
          className=""
          width="50%" 
          height="315" 
          src="https://www.youtube.com/embed/RUofIKAz_Ug" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
        <iframe 
          className=""
          width="50%" 
          height="315" 
          src="https://www.youtube.com/embed/rvKqtjU3Fuo" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
      </div>
    </div>
  );
}
