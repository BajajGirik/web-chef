import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { IndivisualShippingCard } from "../../components/Shipping";
import { getShippingDetails } from "../../state/shipping/shippingActions";
import {
  setCheckoutShippingId,
  setCheckoutStageShipping,
} from "../../state/checkout/checkoutActions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Loading } from "../../components/Loading";

function ShippingList({ isCheckout, shipping, dispatch }) {
  const [selectedShippingId, setSelectedShippingId] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const onclick = (e) => {
    if (selectedShippingId === "") {
      setShowPopup(true);
      return;
    }

    dispatch(setCheckoutShippingId(selectedShippingId));
    navigate(ROUTES.CHECKOUT_CONFIRM);
  };

  useEffect(() => {
    if (!shipping.dataLoaded) dispatch(getShippingDetails());

    if (isCheckout) dispatch(setCheckoutStageShipping());
  }, [shipping.dataLoaded, isCheckout, dispatch]);

  return (
    <>
      {shipping.loading ? (
        <Loading />
      ) : (
        <div className="p-container fg-1">
          <div className="ShippingList-container">
            {shipping.data.map((shippingDetail) => (
              <IndivisualShippingCard
                key={shippingDetail.id}
                {...shippingDetail}
                isCheckout={isCheckout}
                selectedShippingId={selectedShippingId}
                setSelectedShippingId={setSelectedShippingId}
              />
            ))}
          </div>

          {isCheckout && (
            <button
              className={`ShippingCheckout-btn ${
                selectedShippingId === "" ? "disabled" : ""
              }`}
              onClick={onclick}
            >
              Deliver here
            </button>
          )}
        </div>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    shipping: state.shipping,
  };
}

export default connect(mapStateToProps)(ShippingList);
