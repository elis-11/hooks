import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { First } from "./First";
import { Color } from "./color/Color";
import './Course.scss'
import { Apis } from "./apis/Apis";
import { Java } from './java/Java';
import { Todos } from './todos/Todos';

export const Course = () => {
  return (
    <div className="Course">
        <div className="course-comp">
      <ul>
        <li>
          <Link to="">First</Link>
          <Link to="color">Color</Link>
          <Link to="apis">Apis</Link>
          <Link to="java">Java</Link>
          <Link to="todos">Todos</Link>
        </li>
      </ul>
        </div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="color" element={<Color />} />
        <Route path="apis" element={<Apis />} />
        <Route path="todos" element={<Todos />} />
        <Route path="java" element={<Java />} />
      </Routes>
    </div>
  );
};
