import "./Todo.scss";

// export const Header = ( props ) => {
export const Header = ({ title }) => {
  return (
    <header style={{ color: "white" }}>
      <h2>{title}</h2>
    </header>
  );
};
Header.defaultProps = {
  title: "Grocery",
};
