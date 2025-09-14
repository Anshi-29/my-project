import BookItem from "./BookItem";

function BookList({ books, removeBook }) {
  return (
    <div id="book-list">
      {books.map((book, index) => (
        <BookItem key={index} book={book} onRemove={() => removeBook(index)} />
      ))}
    </div>
  );
}

export default BookList;
