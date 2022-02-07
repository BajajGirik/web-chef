import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Loading } from "../Loading";
import "./CheckoutSummary.css";

function OrderDetails({ amount }) {
  return (
    <div className="CheckoutSummary-li-container">
      <h3>Order Details:</h3>
      <div className="flex j-between CheckoutSummary-li">
        <b>Subtotal: </b>
        <span>{amount ? `₹${amount}` : <Loading />}</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Delivery: </b>
        <span>Not decided yet</span>
      </div>
      <div className="flex j-between CheckoutSummary-li">
        <b>Total: </b>
        <b>{amount ? `₹${amount + 50}` : <Loading />}</b>
      </div>
    </div>
  );
}

function ShippingDetails({
  name,
  phone,
  address,
  city,
  pincode,
  showChangeLink,
}) {
  return (
    <div className="CheckoutSummary-li-container">
      <div className="flex al-center j-between">
        <h3>Shipping Details:</h3>
        {showChangeLink && (
          <Link className="link blue" to={ROUTES.CHECKOUT_SHIPPING}>
            Change
          </Link>
        )}
      </div>
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

function OtherDetails({ orderId, orderedOn }) {
  return (
    <div className="CheckoutSummary-li-container">
      <h3>Other Details:</h3>
      {orderId && (
        <div className="flex j-between CheckoutSummary-li">
          <b>Ordered Id: </b>
          <span>{orderId}</span>
        </div>
      )}
      <div className="flex j-between CheckoutSummary-li">
        <b>Payment Mode: </b>
        <span>Cash On Delivery</span>
      </div>
      {orderedOn && (
        <div className="flex j-between CheckoutSummary-li">
          <b>Ordered On: </b>
          <span>{orderedOn}</span>
        </div>
      )}
      <div className="flex j-between CheckoutSummary-li">
        <b>Delivery Time: </b>
        <span>5 working days</span>
      </div>
    </div>
  );
}

export { OrderDetails, ShippingDetails, OtherDetails };
