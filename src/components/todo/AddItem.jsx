import "./Todo.scss";
import { FaPlus } from "react-icons/fa";

export const AddItem = () => {
  return (
    <form className="Add">
      <div className="add-cont">
      <label htmlFor="addItem"></label>
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