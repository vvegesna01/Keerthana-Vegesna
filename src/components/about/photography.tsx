import React from "react";
import Link from "next/link";

export default function Photography() {
  return (
    <div className="flex flex-col">
      <h1 className="text-localhost_text text-4xl font-semibold animate-fadeIn mt-8">Photography</h1>
	  <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn m-3">
        I love taking interesting pictures of my travels and everyday life and documenting the way I see the world through my camera lens. Check out my {" "}
        <Link
          href="https://vsco.co/not-so-keeth/gallery"
          className="text-xl text-links_color underline hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-purple-500 hover:to-indigo-500 transition transform hover:-translate-y-1 hover:scale-100"
        >
          VSCO
        </Link>
		{" "} for my most recent shots!
      </p>
	</div>
  )
  };