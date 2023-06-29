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
      <EventExamples />
      {books.map((book) => {
        return (
          <div>
            <Book {...book} key={book.id} />
          </div>
        );
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleForInput = () => {
    console.log("Handle input");
  };
  const handleOnClick = () => {
    alert("You have clicked");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          onChange={handleForInput}
          type="text"
          name="example "
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleOnClick}>Click Me</button>
    </section>
  );
};

const Book = (props) => {
  const { image, title, author, children } = props;
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
