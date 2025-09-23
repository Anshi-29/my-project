import React, { useState } from 'react';
import BookForm from './components/BookForm.jsx';
import BookList from './components/BookList.jsx';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  const addBook = (title, author) => {
    setBooks([...books, { title, author }]);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        id="search-box"
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <BookForm addBook={addBook} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;