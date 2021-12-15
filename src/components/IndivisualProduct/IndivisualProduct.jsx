import React from "react";
import Veg from "../../assets/Veg.png";
import "./IndivisualProduct.css";

function IndivisualProduct() {
  return (
    <div className="IndivisualProduct-container">
      <div className="IndivisualProduct-img-container">
        <img
          className="IndivisualProduct-img"
          src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/04/Godzilla-vs-kong-Skull-crawlers-Skull-island-.jpg"
          alt=""
        />
      </div>
      <div className="IndivisualProduct-details-container">
        <div className="IndivisualProduct-det-item flex al-center j-between">
          <span>Laddo</span>
          <img className="img-veg" src={Veg} alt="" />
        </div>
        <div className="IndivisualProduct-det-item">
          <span>₹100/-</span>
        </div>
      </div>
      <div className="txt-al-center pb-1">
        <button className="IndivisualProduct-btn">Add To Cart</button>
      </div>
    </div>
  );
}

export default IndivisualProduct;
