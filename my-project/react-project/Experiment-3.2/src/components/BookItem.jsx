function BookItem({ book, onRemove }) {
  return (
    <div id="book-item">
      <span>
        <strong>{book.title}</strong> by {book.author}
      </span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default BookItem;
