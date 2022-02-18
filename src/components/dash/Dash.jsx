import { useState } from "react";
import { Content } from "./Content";
import "./Dash.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Dash = () => {
  const [name, setName] = useState("Elis");
  const handleNameChange = () => {
    const names = ["Rob", "Elis", "Fred"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };
  const handleClick = () => {};

  return (
    <div className="Dash">
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
};
