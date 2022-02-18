import { ItemList } from "./ItemList";
import "./Todo.scss";

export const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    //--style
    <main>
      {items.length ? ( //empty list 1:33
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2vw" }}>Your list is empty.</p> //empty list 1:33
      )}
    </main>
  );
};
