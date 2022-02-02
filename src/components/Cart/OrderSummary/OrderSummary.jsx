import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import "./OrderSummary.css";

function OrderSummary({ amount }) {
  const navigate = useNavigate();

  return (
    <div className="OrderSummary-container flex-c al-center">
      <h2>Order Summary</h2>
      <div className="flex j-between OrderSummary-li">
        <b>Subtotal: </b>
        <span>{amount ? `₹${amount}` : "Loading..."}</span>
      </div>
      <div className="flex j-between OrderSummary-li">
        <b>Delivery: </b>
        <span>Not decided yet</span>
      </div>
      <div className="flex j-between OrderSummary-li">
        <b>Total: </b>
        <b>{amount ? `₹${amount + 50}` : "Loading..."}</b>
      </div>

      {/* <span className="OrderSummary-conditions">
        *Delivery Charges will be updated within 2 days after order confirmation. (Max - ₹100)
      </span> */}

      <button
        onClick={() => navigate(ROUTES.CHECKOUT_SHIPPING)}
        className="place-order-btn"
      >
        Proceed to Buy
      </button>
    </div>
  );
}

export default OrderSummary;
