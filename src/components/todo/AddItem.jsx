import "./Todo.scss";
import { FaPlus } from "react-icons/fa";

export const AddItem = ({newItem, setNewitem, handleSubmit}) => {
  return (
    <form className="Add" onSubmit={handleSubmit}>
      <div className="add-cont">
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
         onChange={(e) => setNewitem(e.target.value)}
        />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
        </div>
    </form>
  );
};