import React from "react";
// import { listItems } from "./apis/ListItem";

export const First = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };

  // const numbers=props.numbers
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
  console.log(listItems);
  return (
    <div className="First">
      <h2>First</h2>

      {/* <h3 className="Date">It is {new Date().toLocaleTimeString()}.</h3> */}
      <h3 className="Date">It is {new Date().toLocaleDateString()}.</h3>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <ul>{listItems}</ul>
    </div>
  );
};
 