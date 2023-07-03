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
  const someValue = "ShakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { image, title, author, displayValue, children } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click Me</button>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
