import { TextField } from "@mui/material";
import React, { useState } from "react";
import { WHATSAPP_LINK } from "../../../constants";
import "./OrderSummary.css";

function OrderSummary({ items, totalAmount }) {
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const placeOrder = () => {
    if (address === "") {
      alert("Address can't be empty");
      return;
    }

    let orderText = "Items for order:\n";

    items.forEach(({ name, qty }) => {
      orderText += `*${name} - ${qty}*\n`;
    });

    orderText += `\n*Phone No*: ${phoneNo}\n`;
    orderText += `*Address*: ${address}\n`;
    orderText = encodeURIComponent(orderText);
    const link = `${WHATSAPP_LINK}?text=${orderText}`;

    window.location.href = link;
  };

  return (
    <div className="OrderSummary-container flex-c al-center">
      <div>
        <b>₹{totalAmount}/- + Delivery Charges</b>
      </div>
      <TextField
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
      />
      <span className="OrderSummary-conditions">
        *Ordering can be done through whatsApp only for now
      </span>
      <div onClick={placeOrder} className="place-order-btn disabled">
        Order Now!
      </div>
    </div>
  );
}

export default OrderSummary;
