import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { VEG_ICON_URI } from "../../constants";
import { Carousal } from "../UI/Caraousal";
import "./IndivisualProduct.css";

function IndivisualProduct({ id, name, pricing, imgUrl }) {
  const [isInCart, setIsInCart] = useState(false);

  const saveItemToCart = () => {
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      items = [...items, { productId: id, qty: 1 }];
    } else {
      items = [{ productId: id, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(items));
    setIsInCart(true);
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
      <div className="txt-al-center pb-1">
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

export default IndivisualProduct;
