import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import "./Todo.scss";

export const AddItem = ({newItem, setNewitem, handleSubmit}) => {
  const inputRef= useRef()

  return (
    <form className="Add" onSubmit={handleSubmit}>
      <div className="add-cont">
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
         onChange={(e) => setNewitem(e.target.value)}
        />
      <button 
      type="submit" 
      aria-label="Add Item"
      onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
        </div>
    </form>
  );
};