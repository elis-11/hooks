import { useState } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { AddItem } from "./AddItem";
import { SearchItem } from "./SearchItem";
import "./Todo.scss";

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

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("Todo", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="Todo">
      <Header title="Grocery List" />
      <div className="content">
        <AddItem
          newItem={newItem}
          setNewitem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
      <Footer length={items.length} />
    </div>
  );
};
