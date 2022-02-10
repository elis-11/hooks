/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { Profile } from "./auth/Profile";
import { Orders } from "./auth/Orders";
import { OrderDetails } from "./auth/OrderDetails"
import "../styles/Dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      Dashboard
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
          <Route path="orders_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};
export const Quotes = () => {
  return <h2>Quotes</h2>;
};
