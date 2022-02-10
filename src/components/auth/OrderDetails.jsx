/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";


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
  