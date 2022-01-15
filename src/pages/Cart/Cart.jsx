import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  IndivisualCartItem,
  OrderSummary,
  CartEmpty,
} from "../../components/Cart";
import { PRODUCTS } from "../../constants";
import "./Cart.css";

function Cart(props) {
  const [items, setItems] = useState([]);

  const { cart } = props;

  useEffect(() => {
    const finalList = cart.data.map(({ productId, qty }) => {
      const item = PRODUCTS.find((product) => product.id === productId);
      return { ...item, qty: qty };
    });

    setItems(finalList);
  }, [cart]);

  return (
    <div className="Cart-container p-nav">
      {items.length ? (
        <>
          <div className="flex-c">
            {items.map((props) => (
              <IndivisualCartItem key={props.id} {...props} />
            ))}
          </div>
          <OrderSummary amount={cart?.amount} />
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
