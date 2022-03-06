import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { First } from "./First";
import { Color } from "./Color";
import './Course.scss'

export const Course = () => {
  return (
    <div className="Course">
        <div className="course-comp">
      Course
      <ul>
        <li>
          <Link to="">First</Link>
          <Link to="color">Color</Link>
        </li>
      </ul>
        </div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="color" element={<Color />} />
      </Routes>
    </div>
  );
};
