import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form id="book-form" onSubmit={handleSubmit}>
      <input
        id="title-input"
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="author-input"
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button id="add-btn" type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;