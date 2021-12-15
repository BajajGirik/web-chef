import React from "react";
import Veg from "../../assets/Veg.png";
import "./IndivisualProduct.css";

function IndivisualProduct({ id, name, pricing, imgUrl }) {
  const saveItemToCart = () => {
    const items = localStorage.getItem("cart");
    if (items) {
      items = [...items, { productId: id, qty: 1 }];
    } else {
      items = [{ productId: id, qty: 1 }];
    }
    localStorage.setItem("cart", items);
  };

  return (
    <div className="IndivisualProduct-container">
      <div className="IndivisualProduct-img-container">
        <img className="IndivisualProduct-img" src={imgUrl} alt="_ProductImg" />
      </div>
      <div className="IndivisualProduct-details-container">
        <div className="IndivisualProduct-det-item flex al-center j-between">
          <span>{name}</span>
          <img className="img-veg" src={Veg} alt="_Veg" />
        </div>
        <div className="IndivisualProduct-det-item">
          <span>{pricing?.[0]?.price}</span>
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
