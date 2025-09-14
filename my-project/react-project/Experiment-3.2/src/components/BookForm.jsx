import { useState } from "react";

function BookForm({ addBook }) {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const handleAdd = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      addBook(newTitle, newAuthor);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  return (
    <div id="book-form">
      <input
        type="text"
        placeholder="New book title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New book author"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
  <button onClick={handleAdd} style={{background:'#111',color:'#fff'}}>Add Book</button>
    </div>
  );
}

export default BookForm;
