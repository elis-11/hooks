import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { First } from "./First";
import { Color } from "./color/Color";
import './Course.scss'
import { Apis } from "./apis/Apis";
import { Java } from './java/Java';
import { Todos } from './todos/Todos';
import { Books } from "./books/Books";
import { Dash } from "./dash/Dash";

export const Course = () => {
  return (
    <div className="Course">
        <div className="course-comp">
      <ul>
        <li>
          <Link to="">First</Link>
          <Link to="color">Color</Link>
          <Link to="books">Books</Link>
          <Link to="apis">Apis</Link>
          <Link to="java">Java</Link>
          <Link to="todos">Todos</Link>
          <Link to="dash">Dash</Link>
        </li>
      </ul>
        </div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="color" element={<Color />} />
        <Route path="books" element={<Books />} />
        <Route path="apis" element={<Apis />} />
        <Route path="todos" element={<Todos />} />
        <Route path="java" element={<Java />} />
        <Route path="dash" element={<Dash />} />
      </Routes>
    </div>
  );
};
