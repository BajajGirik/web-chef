import React from "react";
import {useNavigate} from "react-router-dom";
import "./OrderSummary.css";

function OrderSummary({ amount }) {
	const navigate = useNavigate();
  const placeOrder = () => {
	  navigate("/shipping");
  };

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
      
      
      <div onClick={placeOrder} className="place-order-btn disabled">
        Proceed to Buy
      </div>
    </div>
  );
}

export default OrderSummary;
