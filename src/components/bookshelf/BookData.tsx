import React from 'react';
import './BookDataDisplay.css'; // Assuming you have some basic CSS for styling

interface BookData {
  title: string;
  authors: string[];
  contributors: string[];
  isbn: string;
  editionFormat: string;
  readStatus: string;
  review: string;
  rating: number;
  dateAdded: string;
  readDates: string[];
  readCount: number;
  owned: boolean;
  customTags: string[];
}

interface Props {
  book: BookData;
}

const BookDataDisplay: React.FC<Props> = ({ book }) => {
  return (
    <div className="book-data-display">
      <h1>{book.title}</h1>
      <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
      <p><strong>Contributors:</strong> {book.contributors.join(', ')}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Edition Format:</strong> {book.editionFormat}</p>
      <p><strong>Read Status:</strong> {book.readStatus}</p>
      <p><strong>Review:</strong> {book.review}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <p><strong>Date Added:</strong> {book.dateAdded}</p>
      <p><strong>Read Dates:</strong> {book.readDates.join(', ') || 'N/A'}</p>
      <p><strong>Read Count:</strong> {book.readCount}</p>
      <p><strong>Owned:</strong> {book.owned ? 'Yes' : 'No'}</p>
      <p><strong>Custom Tags:</strong> {book.customTags.join(', ') || 'None'}</p>
    </div>
  );
};

export default BookDataDisplay;
