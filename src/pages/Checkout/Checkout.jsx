import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import {
  OrderDetails,
  ShippingDetails,
  PaymentDetails,
} from "../../components/Checkout";
import "./Checkout.css";
import { placeOrder } from "../../state/order/orderActions";

function Checkout({ cart, shipping, isSummaryStage, shippingId, dispatch }) {
  const navigate = useNavigate();

  const shippingDetails = shipping?.data?.find(
    (item) => item.id === shippingId
  );

  useEffect(() => {
    if (!isSummaryStage) navigate(ROUTES.HOME);
  }, [isSummaryStage]);

  console.log(shippingDetails);
  return (
    <div className="p-container">
      <div className="Checkout-container flex-c al-center ">
        <h2>Order Summary</h2>

        <OrderDetails amount={cart?.amount} />
        <ShippingDetails {...shippingDetails} />
        <PaymentDetails />

        {/* <span className="CheckoutSummary-conditions">
        *Delivery Charges will be updated within 2 days after order confirmation. (Max - ₹100)
      </span> */}
        <button
          className="place-order-btn"
          onClick={() => dispatch(placeOrder(navigate))}
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    shipping: state.shipping,
    isSummaryStage: state.checkout.stage.summary,
    shippingId: state.checkout.shippingId,
  };
}

export default connect(mapStateToProps)(Checkout);
