import "./CheckoutSummary.css";

function OrderDetails({ amount }) {
  return (
    <div className="CheckoutSummary-li-container">
      <h3>Order Details:</h3>
      <div className="flex j-between CheckoutSummary-li">
        <b>Subtotal: </b>
        <span>{amount ? `₹${amount}` : "Loading..."}</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Delivery: </b>
        <span>Not decided yet</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Total: </b>
        <b>{amount ? `₹${amount + 50}` : "Loading..."}</b>
      </div>
    </div>
  );
}

function ShippingDetails({ name, phone, address, city, pincode }) {
  return (
    <div className="CheckoutSummary-li-container">
      <h3>Shipping Details:</h3>
      <div className="flex j-between CheckoutSummary-li">
        <b>Name: </b>
        <span>{name}</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Phone: </b>
        <span>{phone}</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Address: </b>
        <span>
          {address} - {pincode}
        </span>
      </div>
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className="CheckoutSummary-li-container">
      <h3>Payment Details:</h3>
      <div className="flex j-between CheckoutSummary-li">
        <b>Mode: </b>
        <span>Cash On Delivery</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Delivery Time: </b>
        <span>5 working days</span>
      </div>
    </div>
  );
}

export { OrderDetails, ShippingDetails, PaymentDetails };
