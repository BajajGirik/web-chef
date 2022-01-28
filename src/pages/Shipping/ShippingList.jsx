import React from "react";
import { connect } from "react-redux";
import { IndivisualShippingCard } from "../../components/Shipping";

function ShippingList(props) {
  const { shipping } = props;

  return (
    <div className="ShippingList-container p-container">
      {shipping.data.map((shippingDetail) => (
        <IndivisualShippingCard key={shippingDetail.id} {...shippingDetail} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    shipping: state.shipping,
  };
}

export default connect(mapStateToProps)(ShippingList);
