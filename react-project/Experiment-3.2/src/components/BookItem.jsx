import React from 'react';

function BookItem({ title, author }) {
  return (
    <div className="book-item">
      <strong>{title}</strong> by {author}
    </div>
  );
}

export default BookItem;
