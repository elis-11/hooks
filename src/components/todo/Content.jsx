// import { ItemList } from "./ItemList";
import { useState } from "react";
import "./Todo.scss";
import { FaTrashAlt } from "react-icons/fa";

export const Content = () => {
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
    <main>
      {items.length ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              // style={(item.checked) ? {textDecoration: 'line-through'} :null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.list}
            </label>
            {/* <button>x</button> */}
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
      ):(
        <p style={{marginTop: '2rem'}}>Your list is empty</p>
      )}
    </main>
  );
};
