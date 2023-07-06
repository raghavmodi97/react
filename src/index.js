import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
//we can import as below by using default in Book.js
import Book from "./Book";
//Start function name with capital letter

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
