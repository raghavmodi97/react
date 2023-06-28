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
      <Book author={Book1.author} title={Book1.title} image={Book1.image} />
      <Book author={Book2.author} title={Book2.title} image={Book2.image} />
    </section>
  );
};

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <article className="book">
      {/* <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4> */}
      {/* define image title authore above in props
      to access without using props.image etc. */}
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
// another way to write above code
// const Book = ({ image, title, author } ) => {
//
//   return (
//     <article className="book">
//       {/* <img src={props.image} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4> */}
//       {/* define image title authore above in props
//       to access without using props.image etc. */}
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
