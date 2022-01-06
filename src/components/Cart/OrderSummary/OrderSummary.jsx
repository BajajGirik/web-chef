import React, { useState } from "react";
import { WHATSAPP_LINK } from "../../../constants";
import "./OrderSummary.css";

function OrderSummary({ items, totalAmount }) {
  const placeOrder = () => {
    // if (address === "") {
    //   alert("Address can't be empty");
    //   return;
    // }

    // let orderText = "Items for order:\n";

    // items.forEach(({ name, qty }) => {
    //   orderText += `*${name} - ${qty}*\n`;
    // });

    // orderText += `\n*Phone No*: ${phoneNo}\n`;
    // orderText += `*Address*: ${address}\n`;
    // orderText = encodeURIComponent(orderText);
    // const link = `${WHATSAPP_LINK}?text=${orderText}`;

    // window.location.href = link;
  };

  return (
    <div className="OrderSummary-container flex-c al-center">
      <h2>Order Summary</h2>
      <div className="flex j-between OrderSummary-li">
        <b>Subtotal: </b>
        <span>₹{totalAmount}</span>
      </div>
      <div className="flex j-between OrderSummary-li">
        <b>Delivery: </b>
        <span>Not decided yet</span>
      </div>
      <div className="flex j-between OrderSummary-li">
        <b>Total: </b>
        <b>₹{totalAmount + 50}</b>
      </div>
      
      {/* <h2>Contact Details</h2>
      <div className="flex j-between OrderSummary-li">
        <b>Phone: </b>
        <span>{PHONE_NUMBER}</span>
      </div>
      <div className="flex j-between OrderSummary-li">
        <b>Address: </b>
        <span>{HOME_ADDRESS}</span>
      </div> */}
      
      {/* <TextField
        className="OrderSummary-input-fields"
        label="Phone Number"
        variant="standard"
        value={phoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}
      />
      <TextField
        className="OrderSummary-input-fields"
        label="Delivery Address"
        variant="standard"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /> */}
      
      
      <span className="OrderSummary-conditions">
        *Delivery Charges will be updated within 2 days after order confirmation. (Max - ₹100)
      </span>
      
      
      <div onClick={placeOrder} className="place-order-btn disabled">
        Order Now!
      </div>
    </div>
  );
}

export default OrderSummary;
