import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import {
  OrderDetails,
  ShippingDetails,
  PaymentDetails,
} from "../../components/Checkout";
import "./Checkout.css";

function Checkout({ cart, shipping, isSummaryStage, shippingId, dispatch }) {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSummaryStage) navigate(ROUTES.HOME);
  }, [isSummaryStage]);

  return (
    <div className="Checkout-container flex-c al-center p-container">
      <h2>Order Summary</h2>

      <OrderDetails />
      <ShippingDetails />
      <PaymentDetails />

      {/* <span className="CheckoutSummary-conditions">
        *Delivery Charges will be updated within 2 days after order confirmation. (Max - ₹100)
      </span> */}
      <button className="place-order-btn">Proceed to Buy</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    shipping: state.shipping,
    isSummaryStage: state.checkout.stage.summary,
    shippingId: state.checkout.shi,
  };
}

export default connect(mapStateToProps)(Checkout);
