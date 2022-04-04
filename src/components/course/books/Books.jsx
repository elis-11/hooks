import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "./Books.scss";

export const Books = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      return JSON.parse(savedBooks);
    } else {
      return [];
    }
  });
  const [book, setBook] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);


  const handleInputChange = (e) => {
    setBook(e.target.value);
  };
  
  const handleEditInputChange = (e) => {
    setCurrentBook({ ...currentBook, text: e.target.value });
    console.log(currentBook);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (book !== "") {
      setBooks([
        ...books,
        {
          id: new Date(),
          //   id: books.length + 1,
          text: book.trim(),
        },
      ]);
    }
    setBook("");
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateBook(currentBook.id, currentBook);
  };
  const handleUpdateBook = (id, updatedBook) => {
    const updatedItem = books.map((book) => {
      return book.id === id ? updatedBook : book;
    });
    setIsEditing(false);
    setBooks(updatedItem);
  };
  const handleEditClick = (book) => {
    setIsEditing(true);
    setCurrentBook({ ...book });
  };
  
  const handleDeleteClick = (id) => {
    const removeItem = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(removeItem);
  };

  return (
    <div className="Books">
      <header>
        <h2>Books List</h2>
      </header>
      <div className="container">
        {isEditing ? (
          <form className="edit-form" onSubmit={handleEditFormSubmit}>
            <input
              name="editBook"
              type="text"
              placeholder="Edit Book"
              value={currentBook.text}
              onChange={handleEditInputChange}
            />
            <button className="update" type="submit">
              Update
            </button>
            <button className="cancel" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              name="book"
              type="text"
              placeholder="Create a new Book"
              value={book}
              onChange={handleInputChange}
            />
          </form>
        )}
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book">
              {book.text}
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div className="icons">
                <FaEdit
                  className="icon"
                  onClick={() => handleEditClick(book)}
                  role="button"
                  tabIndex="0"
                />
                <FaTrashAlt
                  className="icon"
                  onClick={() => handleDeleteClick(book.id)}
                  role="button"
                  tabIndex="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>Copyright &copy; 2022</footer>
    </div>
  );
};
