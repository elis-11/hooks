import React from "react";
import { Routes, NavLink, Route } from "react-router-dom";
import { First } from "./First";
import { Color } from "./color/Color";
import { Apis } from "./apis/Apis";
import { Java } from './java/Java';
import { Todos } from './todos/Todos';
import { Books } from "./books/Books";
import { Name } from "./name/Name";
import './Course.scss'

export const Course = () => {
  return (
    <div className="Course">
        <div className="links">
          <NavLink to="" end>Books</NavLink>
          <NavLink to="first" >First</NavLink>
          <NavLink to="color">Color</NavLink>
          <NavLink to="apis">Apis</NavLink>
          <NavLink to="java">Java</NavLink>
          <NavLink to="todos">Todos</NavLink>
          <NavLink to="name">Name</NavLink>
        </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="first" element={<First />} />
        <Route path="color" element={<Color />} />
        <Route path="apis" element={<Apis />} />
        <Route path="todos" element={<Todos />} />
        <Route path="java" element={<Java />} />
        <Route path="name" element={<Name />} />
      </Routes>
    </div>
  );
};
