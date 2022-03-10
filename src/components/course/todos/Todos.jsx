import React from "react";
import { TodoList } from "./TodoList";
import "./TodoList.scss";

const persons = ["person1", "person2", "person3", "person4"];

export const Todos = () => {
  return (
    <div className="container">
      <div className="Todos">
        {persons.map((m) => (
          <TodoList idCode={m} key={m} />
        ))}
      </div>
    </div>
  );
};
// https://github.com/edwardtanguay/todolist-react-multiple-components
