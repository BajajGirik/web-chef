import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { VEG_ICON_URI } from "../../constants";
import { saveToCart } from "../../state/cart/cartActions";
import { Carousal } from "../UI/Caraousal";
import "./IndivisualProduct.css";

function IndivisualProduct({ id, name, pricing, imgUrl, ...rest }) {
  const [isInCart, setIsInCart] = useState(false);

  const { cart, dispatch } = rest;
  
  const saveItemToCart = () => {
    dispatch(saveToCart(id, 1));
  };

  const removeItemFromCart = () => {
    let items = JSON.parse(localStorage.getItem("cart"));
    items = items.filter(({ productId }) => productId !== id);

    localStorage.setItem("cart", JSON.stringify(items));
    setIsInCart(false);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (!items) return;
    const index = items.findIndex(({ productId }) => productId === id);

    if (index !== -1) {
      setIsInCart(true);
    }
  }, [id]);

  return (
    <div className="IndivisualProduct-container">
      <Carousal classname="IndivisualProduct-img" imgArray={imgUrl} />
      <div className="IndivisualProduct-details-container">
        <div className="IndivisualProduct-det-item flex al-center j-between">
          <span>{name}</span>
          <img className="img-veg" src={VEG_ICON_URI} alt="_Veg" />
        </div>
        <div className="IndivisualProduct-det-item">
          <span>₹{pricing?.[0]?.price}/-</span>
        </div>
      </div>
      <div className="txt-al-center pb">
        {!isInCart ? (
          <button className="IndivisualProduct-btn" onClick={saveItemToCart}>
            Add To Cart
          </button>
        ) : (
          <button
            className="IndivisualProduct-btn remove-cart-btn"
            onClick={removeItemFromCart}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(IndivisualProduct);
