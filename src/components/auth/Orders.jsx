import React from "react";
import { Link } from "react-router-dom";

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
