import React from "react";
import { VEG_ICON_URI } from "../../constants";
import { Carousal } from "../UI/Caraousal";
import "./IndivisualProduct.css";

function IndivisualProduct({ id, name, pricing, imgUrl }) {
  const saveItemToCart = () => {
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      items = [...items, { productId: id, qty: 1 }];
    } else {
      items = [{ productId: id, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(items));
  };

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
        <button className="IndivisualProduct-btn" onClick={saveItemToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default IndivisualProduct;
