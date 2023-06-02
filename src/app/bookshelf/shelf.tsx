import React from "react";
import Image from 'next/image';

const Shelf: React.FC = () => {
  const books = [
    { title: "Martian", image: "/images/martian.png" },
    { title: "Goodbye, Things", image: "/images/goodbye_things.png" },
    { title: "Fun Age", image: "/images/fun_age.png" },
    { title: "Before the Coffee Gets Cold", image: "/images/before_the_coffee.png" },
    { title: "Seven Husbands of Evelyn Hugo", image: "/images/seven_husbands.png" },
    { title: "Ove", image: "/images/ove.png" },
    { title: "Red-Haired Woman", image: "/images/red_haired_woman.png" },
    { title: "The Vanishing Half", image: "/images/vanishing_half.png" },
    { title: "Educated", image: "/images/educated.png" },
    { title: "The Giver", image: "/images/giver.png" },
    // Add more books here
  ];

  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-5 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <Image src={book.image} alt={book.title} width={200} height={150} className="w-fit h-full" />
            <div className="absolute bottom-0 inset-x-0 bg-gray-900 text-white py-1 px-2 text-sm font-medium">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
