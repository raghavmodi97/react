import React from "react";
import ReactDOM from "react-dom/client";

//Start function name with capital letter
function Greeting() {
  return (
    <div>
      <Heading />
      <Para />
    </div>
  );
}
const Heading = () => <h2>Hello World</h2>;
const Para = () => {
  return <p>This is React</p>;
};
//function Greeting(){
//     return <div><h2>MyFirstComponent</h2></div>;
// }

//Using Create Element
// function Greeting() {
//   return React.createElement("h2", {}, "My Component");
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
