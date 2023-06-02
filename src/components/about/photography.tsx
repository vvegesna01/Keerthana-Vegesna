import React from "react";
import Link from "next/link";

export default function Photography() {
  return (
    <div className="flex flex-col">
      <h1 className="text-localhost_text text-4xl font-semibold animate-fadeIn mt-8">Photography</h1>
	  <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn m-3">
        I love taking interesting pictures of my travels and everyday life and documenting the way I see the world through my camera lens. 
		Here are a few of my recent favourite shots. Check out my {" "}
        <Link
          href="https://vsco.co/not-so-keeth/gallery"
          className="text-localhost_text underline transition duration-300 hover:text-blue-500"
        >
          VSCO
        </Link>
		{" "} for more!
      </p>
	</div>
  )
  };