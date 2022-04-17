import { useState } from "react";
import './Name.scss';


export const Header = () => {
  const [name, setName] = useState("Elis");
  const handleNameChange = () => {
    const names = ["Rob", "Elis", "Fred"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };
  const handleClick = () => {};

  return (
<header>
  <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
</header>
    )
}
