import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//Start function name with capital letter
const books = [
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    image: "./Images/Book_1.jpg",
    id: 1,
  },
  {
    title: "The Covenant Of War",
    author: "Abraham Verghese",
    image: "./Images/Book_2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { title, author, image, id } = book;
        return (
          <div>
            <Book book={book} key={id} />
          </div>
        );
      })}
    </section>
  );
};

const Book = ({ book: { image, title, author, children } }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
