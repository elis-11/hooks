import React from "react";
import { TodoList } from "./TodoList";
import "./TodoList.scss";

const persons = ["person001", "person002", "person003", "person004"];

export const TodoEd = () => {
  return (
    <div className="container">
      <div className="TodoEd">
        {persons.map((m) => (
          <TodoList idCode={m} key={m} />
        ))}
      </div>
    </div>
  );
};
// https://github.com/edwardtanguay/todolist-react-multiple-components
