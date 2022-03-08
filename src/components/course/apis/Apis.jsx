import { useState, useEffect } from "react";
import { Form } from "./Form";
import {List} from "./List";

export const Apis = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);
  return (
    <div className="Apis">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items} />
    </div>
  );
};
//! last=4.24