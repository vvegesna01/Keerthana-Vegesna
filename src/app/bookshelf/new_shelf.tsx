"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Shelf: React.FC = () => {
  // Initial book grid positions (5x3 grid)
  const initialBooks = [
    { id: 1, title: "Martian", image: "/images/martian.png", position: 0 },
    { id: 2, title: "Goodbye, Things", image: "/images/goodbye_things.png", position: 1 },
    { id: 3, title: "Fun Age", image: "/images/fun_age.png", position: 2 },
    { id: 4, title: "Before the Coffee Gets Cold", image: "/images/before_the_coffee.png", position: 3 },
    { id: 5, title: "Seven Husbands of Evelyn Hugo", image: "/images/seven_husbands.png", position: 4 },
    { id: 6, title: "Ove", image: "/images/ove.png", position: 5 },
    { id: 7, title: "Red-Haired Woman", image: "/images/red_haired_woman.png", position: 6 },
    { id: 8, title: "The Vanishing Half", image: "/images/vanishing_half.png", position: 7 },
    { id: 9, title: "Educated", image: "/images/educated.png", position: 8 },
    { id: 10, title: "The Giver", image: "/images/giver.png", position: 9 },
    { id: 11, title: "If We Were Villains", image: "/images/villians.jpeg", position: 10 },
    { id: 12, title: "Bunny", image: "/images/bunny.jpeg", position: 11 },
    { id: 13, title: "Almond", image: "/images/almond.jpeg", position: 12 },
    { id: 14, title: "What We Fed to the Manticore", image: "/images/manticore.jpeg", position: 13 },
    { id: 15, title: "Yellowface", image: "/images/yellowface.png", position: 14 },
    { id: 16, title: "Crying in H Mart", image: "/images/hmart.jpeg", position: 15 },
  ];

  const [books, setBooks] = useState(initialBooks);

  const handleDragEnd = (bookId: number, newPosition: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId
          ? { ...book, position: newPosition } // Update book position after drag
          : book
      )
    );
  };

  const gridSize = 5; // Grid size for the shelf (5x3)

  return (
    <div className="bg-gray-100 p-4">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: "10px",
        }}
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
            whileHover={{
              scale: 1.1,
              rotateY: 15, // 3D effect on hover
            }}
            whileTap={{
              scale: 0.95, // Shrink on click for a more interactive feel
            }}
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }} // Restrict drag movement within the container
            dragSnapToOrigin={true} // When you drop the book, it snaps back to its original position
            onDragEnd={(e, info) => {
              const col = Math.floor(info.point.x / 200); // Calculate column based on drag position
              const row = Math.floor(info.point.y / 150); // Calculate row based on drag position
              const newPosition = row * gridSize + col;
              handleDragEnd(book.id, newPosition); // Update book's position in the state
            }}
            initial={{ opacity: 0 }} // Fade in on render
            animate={{ opacity: 1 }} // Smooth fade-in
            transition={{ duration: 0.5 }} // Smooth transition
          >
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={150}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gray-900 text-white py-1 px-2 text-sm font-sm">
              {book.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
