import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Content = () => {
  //--style
  const contentStyle = { color: "white" };

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "tralala",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    //--style
    <main style={contentStyle}>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            {/* <button>Delete</button> */}
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};
