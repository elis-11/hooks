import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active" end>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" activeClassName="active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dash" activeClassName="active">
            Dash
          </Link>
        </li>
        <li>
          <Link to="/todo" activeClassName="active">
            Todo
          </Link>
        </li>
        <li>
          <Link to="/count" activeClassName="active">
            Count
          </Link>
        </li>
        <li>
          <Link to="/object_route" activeClassName="active">
            Route as Object
          </Link>
        </li>
        <li>
          <Link to="/search" activeClassName="active">
            Search
          </Link>
        </li>
        <li>
          <Link to="/public" activeClassName="active">
            Public Page
          </Link>
        </li>
        <li>
          <Link to="/protected" activeClassName="active">
            Protected Page
          </Link>
        </li>
        <li>
          <Link to="/invoices" activeClassName="active">
            Invoices
          </Link>
        </li>
        <li>
          <Link to="/java" activeClassName="active">
            Java
          </Link>
        </li>
        <li>
          <Link to="/scrolling" activeClassName="active">
            Scrolling
          </Link>
        </li>
      </ul>
    </nav>
  );
};
