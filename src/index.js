import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//Start function name with capital letter

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const author = "Rebecca Yarros";
const Book = () => {
  const title = "Iron Flame";
  return (
    <article className="book">
      <img src="./Images/Book_1.jpg" alt="Iron Flame" />
      <h2>{title}</h2>
      {/* In {} only expressions are allowed and not statements */}
      <h4>{author} </h4>
    </article>
  );
};

// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
