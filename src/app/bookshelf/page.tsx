import React from "react";
import Link from "next/link";
import Shelf from "./shelf";

export default function Bookshelf() {
	return (
<main className="flex min-h-screen flex-col justify-between p-24 bg-white">
  <div className="flex flex-col">
    <h1 className="text-localhost_text text-2xl font-semibold m-5">BOOKSHELF</h1>
    <p className="text-localhost_text text-xl m-5">
      These are some of my favourite reads.
      Check out my{" "}
      <Link
        href="https://www.notion.so/keeths-books/Books-Keeth-Reads-78bf534fab6d44848073459ad421e91e"
        className="underline py-2 pl-3 pr-4"
      >reading website</Link>{" "}where I document my self imposed reading challenges and more!
    </p>
    <Shelf/>
    
  </div>
</main>

	)
}