import { FaTrashAlt } from "react-icons/fa";
import "./Todo.scss";


export const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item"> 
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)} //! <-- localStorage
      >
        {item.item}
      </label>
      {/* <button>Delete</button> */}
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};
