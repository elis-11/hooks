import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dash" activeClassName="active">
            Dash
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/count" activeClassName="active">
            Count
          </NavLink>
        </li>
        <li>
          <NavLink to="/object_route" activeClassName="active">
            Route as Object
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/public" activeClassName="active">
            Public Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/protected" activeClassName="active">
            Protected Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoices" activeClassName="active">
            Invoices
          </NavLink>
        </li>
        <li>
          <NavLink to="/java" activeClassName="active">
            Java
          </NavLink>
        </li>
        <li>
          <NavLink to="/scrolling" activeClassName="active">
            Scrolling
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
