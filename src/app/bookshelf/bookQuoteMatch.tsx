"use client";
import React, { useState } from "react";

interface Book {
  title: string;
  coverImage: string;
  quote: string;
}

const BookQuoteMatch: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentQuote, setCurrentQuote] = useState<Book | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  // List of books, each with a title, cover image, and quote
  const books: Book[] = [
    {
      title: "The Martian - Andy Weir",
      coverImage: "/images/martian.png", 
      quote: "Yes, of course duct tape works in a near-vacuum. Duct tape works anywhere. Duct tape is magic and should be worshiped.",
    },
    {
      title: "Before the Coffee Gets Cold",
      coverImage: "/images/before_the_coffee.png", 
      quote: "At the end of the day, whether one returns to the past or travels to the future, the present doesn’t change.",
    },
    {
      title: "The Giver",
      coverImage: "/images/giver.png",
      quote: "The life where nothing was ever unexpected. Or inconvenient. Or unusual. The life without colour, pain or past.",
    },
    {
      title: "Crying in H Mart",
      coverImage: "/images/hmart.jpeg",
      quote: "She was my champion, she was my archive. She had taken the utmost care to preserve the evidence of my existence and growth, capturing me in images.",
    },

  ];

  const getRandomQuote = (): Book => {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
  };

  const shuffleArray = (array: any[]) => {
    // Simple shuffle function to randomize the options
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  };

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === currentQuote?.title) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again!");
    }

    // Get a new random quote after a short delay
    setTimeout(() => {
      setFeedback("");
      setCurrentQuote(getRandomQuote());
    }, 1000);
  };

  const resetGame = () => {
    setScore(0);
    setFeedback("");
    setCurrentQuote(getRandomQuote());
  };

  

  React.useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  return (
    <div className="p-5 bg-gray-700 rounded shadow-md mb-5">
      <h2 className="text-2xl font-bold mb-3">Book Quote Match Game</h2>
      {currentQuote ? (
        <div>
          <p className="mb-3 text-xl">{`"${currentQuote.quote}"`}</p>
          <div className="flex space-x-4 justify-center">
            {/* Generate the options, including the correct answer */}
            {(() => {
              // Get a list of random books and shuffle the options
              const options = [...books];
              shuffleArray(options); // Randomize the order

              // Ensure the correct book is included in the options
              const shuffledOptions = options.slice(0, 3); // Select 3 random books
              if (!shuffledOptions.includes(currentQuote)) {
                shuffledOptions.pop(); // Remove the last element if it's not the correct one
                shuffledOptions.push(currentQuote); // Add the correct answer
              }
              shuffleArray(shuffledOptions); // Shuffle again to randomize position

              return shuffledOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.title)}
                  className="w-1/4 p-2 rounded-md shadow-md hover:bg-indigo-800 transition"
                >
                   <div className="">
                    <img
                      src={option.coverImage}
                      alt={option.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-center mt-2">{option.title}</p>
                </button>
              ));
            })()}
          </div>
          <p className="mt-3 font-medium text-lg">{feedback}</p>
          <p className="mt-3">Score: {score}</p>
          <button
            onClick={resetGame}
            className="mt-4 w-full py-2 bg-indigo-800 text-white rounded-md hover:bg-blue-600 transition"
          >
            Play Again
          </button>
        </div>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default BookQuoteMatch;
