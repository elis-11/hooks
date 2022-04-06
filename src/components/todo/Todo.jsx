import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { AddItem } from "./AddItem";
import { SearchItem } from "./SearchItem";
import apiRequest from "./apiRequest";
import "./Todo.scss";

export const Todo = () => {
  const API_URL = "http://localhost:3500/items";
  // const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

  const [items, setItems] = useState([
    // {id: 1,checked: false,list: "Todo",},
    // {id: 5, checked: true, list: "Cookies"},
  ]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  const addItem = async (list) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, list };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
        <main>
          {isLoading && <p style={{ margin: "40px" }}>Loading...</p>}
          {fetchError && (
            <p
              style={{ color: "red", margin: "40px" }}
            >{`Error: ${fetchError}`}</p>
          )}
          {!fetchError && !isLoading && (
            <Content
              items={items.filter((item) =>
                item.list.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )}
        </main>
      </div>
      <Footer length={items.length} />
    </div>
  );
};
//! 3:03 --6.03
