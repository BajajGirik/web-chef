import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IndivisualProduct } from "../../components/Product";
import { Popup } from "../../components/UI/Popup";
import { PRODUCTS, ROUTES } from "../../utils/constants";
import "./Products.css";

function Products({ cart, params }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const productArray = PRODUCTS.filter(
    (product) => product.type === params
  );

  useEffect(() => {
    if (cart?.error) setShowPopup(true);
  }, [cart]);

  return (
    <>
      {showPopup && (
        <Popup
          heading={cart.error}
          desc={cart.msg}
          priText="Go to Login Page"
          priFn={() => navigate(ROUTES.LOGIN)}
          exitFn={() => setShowPopup(false)}
        />
      )}
      <div key={params} className="Products-container p-container">
        {productArray?.map((props) => (
          <IndivisualProduct key={props.id} {...props} />
        ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Products);
