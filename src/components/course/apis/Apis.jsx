import { useState, useEffect } from "react";
import { Form } from "./Form";

export const Apis = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  // const [items, setItems] = useState([]);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        // setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);
  return (
    <div className="Apis">
      <Form reqType={reqType} setReqType={setReqType} />
    </div>
  );
};
//! last=4.24