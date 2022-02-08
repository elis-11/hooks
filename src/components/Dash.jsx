import React from "react";
import { Routes, Link, Route } from "react-router-dom";

export const Dash = () => {
  return (<div>
      Dash
      <ul>
        <li>
          <Link to="">Profile 1</Link>
        </li>
        <li>
          <Link to="orders">Orders 1</Link>
        </li>
        <li>
          <Link to="quotes">Quotes 1</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
        </Routes>
      </div>
      </div>
  )
};
export const Profile = () => {
    return <h2>Profile</h2>
  }
  export const Orders = () => {
    return <h2>Orders</h2>
  }
  export const Quotes = () => {
    return <h2>Quotes</h2>
  }
  