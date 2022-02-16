import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import "../../styles/Todo.scss";

export const Todo = () => {
  return (
    <div className="Todo">
      <Header title="Grocery List" />
      <Content />
      <Footer />
    </div>
  );
};
