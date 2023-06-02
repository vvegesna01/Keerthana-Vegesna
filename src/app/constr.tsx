import React from "react";
import Image from 'next/image';

export default function UnderConstruction() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white">
      <div className="flex flex-col items-center">
        <Image
          src="/images/constr.jpg"
          alt="construction"
		  width={100}
		  height={450}
          className="object-contain h-48 w-48 mb-8 animate-fadeIn"
        />
        <h1 className="text-localhost_text text-4xl font-semibold mb-4 animate-fadeIn">
          Under Construction
        </h1>
        <p className="text-localhost_text text-xl text-center animate-fadeIn">
          This page is currently under construction.
          <br />
          Please check back later!
        </p>
      </div>
    </main>
  );
}
