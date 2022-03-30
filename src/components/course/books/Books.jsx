import React from "react";
import "./Books.scss";
// import { useState } from "react";

export const Books = () => {
  //   const [books, setBooks] = useState([]);
  //   const [book, setBook] = useState("");

  return (
    <div className="Books">
      <header>
        <h2>Books List</h2>
      </header>
      <div className="container">
        <div>
          <input name="book" type="text" placeholder="Create a new Book" />
        </div>
        <div className="book-list">
          {/* {books.map((book) => ( */}
          {/* <div key={book.id} className="book">
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div className="icons">icons</div>
        </div> */}
          {/* ))} */}
        </div>
      </div>
      <footer> Copyright &copy; 2022</footer>
    </div>
  );
};
