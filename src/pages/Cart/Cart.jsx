import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IndivisualCartItem, CartEmpty } from "../../components/Cart";
import { PRODUCTS, ROUTES } from "../../utils/constants";
import "./Cart.css";

function Cart({ cart }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const finalList = cart.data.map(({ productId, qty }) => {
      const item = PRODUCTS.find((product) => product.id === productId);
      return { ...item, qty: qty };
    });

    setItems(finalList);
  }, [cart]);

  return (
    <div className="Cart-container fg-1 p-container">
      {items.length ? (
        <>
          <div className="flex-c">
            {items.map((props) => (
              <IndivisualCartItem key={props.id} {...props} />
            ))}
          </div>

          <div className="Cart-summary flex al-center j-between">
            <p>
              <b>Subtotal: </b> &nbsp;₹
              {cart?.amount ? cart.amount : "Loading..."}
            </p>

            <button onClick={() => navigate(ROUTES.CHECKOUT_SHIPPING)}>
              Continue
            </button>
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
