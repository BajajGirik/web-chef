import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IndivisualShippingCard } from "../../components/Shipping";
import { getShippingDetails } from "../../state/shipping/shippingActions";

function ShippingList({ shipping, dispatch }) {
  useEffect(() => {
    dispatch(getShippingDetails());
  }, []);

  return (
    <>
      {shipping.loading ? (
        "Loading..."
      ) : (
        <div className="p-container fg-1">
          {shipping.data.map((shippingDetail) => (
            <IndivisualShippingCard
              key={shippingDetail.id}
              {...shippingDetail}
            />
          ))}
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
