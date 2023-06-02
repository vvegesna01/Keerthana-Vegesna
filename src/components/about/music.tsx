import React from "react";
import Link from "next/link";

export default function Music() {
  return (
    <div className="flex flex-col">
      <h1 className="text-localhost_text text-4xl font-semibold animate-fadeIn">Music</h1>

      <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn m-3">
        I spend my free time songwriting, singing, and honing my guitar skills. I also upload covers and original songs on my{" "}
        <Link
          href="https://www.youtube.com/channel/UC3jv-V2sKktWbd16ISmz2WQ"
          className="text-localhost_text underline transition duration-300 hover:text-blue-500"
        >
          YouTube channel!
        </Link>
      </p>
      <div className="flex flex-col space-y-4 animate-fadeIn">
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/RUofIKAz_Ug" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/rvKqtjU3Fuo" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
      </div>
    </div>
  );
}
