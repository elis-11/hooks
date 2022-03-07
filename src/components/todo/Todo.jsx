import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { AddItem } from "./AddItem";
import { SearchItem } from "./SearchItem";
import "./Todo.scss";

export const Todo = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Todo")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(items));
  }, [items]);

  const addItem = (list) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, list };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
        <SearchItem search={search} setSearch={setSearch} />
        <Content
          items={items.filter((item) =>
            item.list.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
      <Footer length={items.length} />
    </div>
  );
};
//! 3:03 --6.03
