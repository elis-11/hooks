import { FaPlus } from "react-icons/fa";
import "../../styles/Todo.scss";

export const AddItem = () => {
  return (
    <form className="addForm">
      <div className="container">
        <label htmlFor="addItem">Add Item</label>
        <input
          autoFocus
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </div>
    </form>
  );
};
