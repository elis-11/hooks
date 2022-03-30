import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import "./Books.scss";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");

  const handleInputChange = (e) => {
    setBook(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (book !== "") {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          text: book.trim(),
        },
      ]);
    }
    setBook("");
  };

  return (
    <div className="Books">
      <header>
        <h2>Books List</h2>
      </header>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input
            name="book"
            type="text"
            placeholder="Create a new Book"
            value={book}
            onChange={handleInputChange}
          />
        </form>
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book">
              {book.text}
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div className="icons">
                <FaEdit className="icon" role="button" tabIndex="0" />
                <FaTrashAlt className="icon" role="button" tabIndex="0" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>Copyright &copy; 2022</footer>
    </div>
  );
};
