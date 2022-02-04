/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
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
export const Profile = () => {
  return <h2>Profile</h2>;
};
export const Orders = () => {
  const orderIds = ["1", "2", "3", "4", "5"];
  return (
    <>
      <h2>Orders</h2>
      <ul className="orders">
        {/* Loop through the orders array and display link to order details */}
        {orderIds.map((orderId) => {
          return (
            <li key={orderId}>
              <Link to={`/dashboard/order_details/${orderId}`}>
                View Order {orderId}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export const Quotes = () => {
  return <h2>Quotes</h2>;
};

export const OrderDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onBackClick = (e) => {
    e.preventDefault();
    // navigate(-1);
    navigate("/dashboard/orders");
  };

  return (
    <>
      <h2>Details of order {params.orderId}</h2>
      <a href="#" onClick={onBackClick}>
        Back to Orders
      </a>
    </>
  );
};
