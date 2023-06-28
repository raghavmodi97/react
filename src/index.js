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
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => <img src="./Images/Book_1.jpg" alt="Iron Flame" />;
const Title = () => (
  <h2 style={{ color: "#637d58", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Iron Flame
  </h2>
);
//defining css in below manner only, we can override this in .css file
//In above case overriding the stylein .css file is not possible
const Author = () => {
  const inlineHeadingSTyle = {
    color: "#637d58",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingSTyle}>Rebecca Yarros </h4>;
};
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
