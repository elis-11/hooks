import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : "none")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dash"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Dash
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/todo"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Todo
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/todos"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/course"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/count"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Count
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/object_route"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Route as Object
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/public"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Public Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/protected"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Protected Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/invoices"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Invoices
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/scrolling"
            className={(navData) => (navData.isActive ? "active" : "none")}
          >
            Scrolling
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
