// import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
// import { AddItem } from "./AddItem";
// import { SearchItem } from "./SearchItem";
import "./Todo.scss";

export const Todo = () => {
  return (
    <div className="Todo">
      <Header title="Grocery List" />
      <div className="content">
        hello
        <Content />
      </div>
      <Footer />
    </div>
  );
};
