import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Content = () => {
  //--style
  const contentStyle = { color: "white" };

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // -- LOCALSTORAGE --
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

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
            <label
            style={(item.checked) ? {textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(item.id)} // <-- localStorage
            >
              {item.item}
            </label>
            {/* <button>Delete</button> */}
            <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
            role="button" 
            tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};
