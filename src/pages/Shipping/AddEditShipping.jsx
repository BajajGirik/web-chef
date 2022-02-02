import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ShippingForm from "../../components/Shipping/ShippingForm";
import { Popup } from "../../components/UI/Popup";
import { getShippingDetails } from "../../state/shipping/shippingActions";
import "./Shipping.css";

function AddEditShipping({ isCheckout, shipping, dispatch }) {
  const [searchParams] = useSearchParams();
  const [shipDetToUpdate, setShipDetToUpdate] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(getShippingDetails());
  }, [dispatch]);

  useEffect(() => {
    if (searchParams.get("id")) {
      const details = shipping.data.find(
        ({ id }) => id === searchParams.get("id")
      );
      details && setShipDetToUpdate(details);
    }

    if (shipping?.error) setShowPopup(true);
  }, [shipping, searchParams]);

  return (
    <>
      {showPopup && (
        <Popup
          heading={shipping.error}
          desc={shipping.msg}
          exitFn={() => setShowPopup(false)}
        />
      )}
      <div className="p-container">
        <ShippingForm isCheckout={isCheckout} id={shipDetToUpdate?.id} shipInfo={shipDetToUpdate} />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    shipping: state.shipping,
  };
}

export default connect(mapStateToProps)(AddEditShipping);
