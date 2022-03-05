// import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
// import { AddItem } from "./AddItem";
// import { SearchItem } from "./SearchItem";
import "./Todo.scss";
import { useState } from "react";

export const Todo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      list: "Todo",
    },
    {
      id: 2,
      checked: true,
      list: "Done",
    },
  ]);
  //! 1:36
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("Todo", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("Todo", JSON.stringify(listItems));
  };

  return (
    <div className="Todo">
      <Header title="Grocery List" />
      <div className="content">
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
      <Footer length={items.length}/>
    </div>
  );
};
