import "../../styles/Todo.scss";

export const Footer = ({length}) => {
  const today = new Date();
  return (
    <footer>
        <p>{length} List {length === 1 ? "Item" : "Items"} </p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};
