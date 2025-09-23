import React from 'react';
import BookItem from './BookItem.jsx';

function BookList({ books }) {
  return (
    <div id="book-list">
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book, idx) => <BookItem key={idx} {...book} />)
      )}
    </div>
  );
}

export default BookList;