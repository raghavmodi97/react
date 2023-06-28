import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//Start function name with capital letter

const Book1 = {
  title: "Iron Flame",
  author: "Rebecca Yarros",
  image: "./Images/Book_1.jpg",
};
const Book2 = {
  title: "The Covenant Of War",
  author: "Abraham Verghese",
  image: "./Images/Book_2.jpg",
};
const BookList = () => {
  return (
    <section className="booklist">
      <Book author={Book1.author} title={Book1.title} image={Book1.image}>
        <button>Click Me</button>
      </Book>
      <Book author={Book2.author} title={Book2.title} image={Book2.image}>
        <p>Clilck Me</p>
      </Book>
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
// another way to write above code
// const Book = ({ image, title, author, children }) => {
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
