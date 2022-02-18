import React, { useState } from "react";
import {FaTrashAlt} from "react-icons/fa"
import './Dash.scss';

export const Content = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      checked: false,
      item: "Item 1",
    },
    {
      id: "2",
      checked: false,
      item: "Item 2",
    },
  ]);
  return (
    <div className="Content">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" 
            checked={item.checked}
             />
             <label>{item.item}</label>
             <FaTrashAlt role="button" tabIndex='0' />
          </li>
        ))}
      </ul>
    </div>
  );
};
