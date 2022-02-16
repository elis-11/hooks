import "../../styles/Todo.scss";

export const Footer = () => {
  const today = new Date();
  return (
    <foother>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </foother>
  );
};
