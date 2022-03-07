import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { First } from "./First";
import { Color } from "./color/Color";
import './Course.scss'
import { Apis } from "./apis/Apis";

export const Course = () => {
  return (
    <div className="Course">
        <div className="course-comp">
      Course
      <ul>
        <li>
          <Link to="">First</Link>
          <Link to="color">Color</Link>
          <Link to="apis">Apis</Link>
        </li>
      </ul>
        </div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="color" element={<Color />} />
        <Route path="apis" element={<Apis />} />
      </Routes>
    </div>
  );
};
