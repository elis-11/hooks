import { useState } from "react";

export const Content = () => {
  //--style
  const contentStyle = { color: "white" };

const [name, setName] = useState('')
const [count, setCount] = useState(0)

  //--1
  const handleNameChange = () => {
    const names = ["Rob", "John", "Dave", "Peter", "Luis"];
    const concret = Math.floor(Math.random() * 5);
    setName(names[concret]);
  };
  //--2
  const handleClick = () => {
      setCount(count + 1)
      setCount(count + 1)
    console.log(count);
  };
  //--3
  const handleClick2 = () => {
    console.log(count);
  };

  return (
    //--style
    <main style={contentStyle}>
      {/* --1 --20 */}
      <p onDoubleClick={handleClick}>
          Hello {name}!
      </p>
      {/*  --44 */}
      <button onClick={handleNameChange}>Change Name</button>
      {/* --2 --44 */}
      <button onClick={handleClick}>Click it</button>
      {/* --3 --48 */}
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
};
