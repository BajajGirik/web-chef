import React from "react";
import Veg from "../../assets/Veg.png";
import "./IndivisualProduct.css";

function IndivisualProduct({ id, name, pricing, imgUrl }) {
  return (
    <div className="IndivisualProduct-container">
      <div className="IndivisualProduct-img-container">
        <img className="IndivisualProduct-img" src={imgUrl} alt="Product_img" />
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
        <button className="IndivisualProduct-btn">Add To Cart</button>
      </div>
    </div>
  );
}

export default IndivisualProduct;
