import { LineItem } from "./LineItem";
import "../../styles/Todo.scss";


export const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
          <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
      ))}
    </ul>
  );
};
