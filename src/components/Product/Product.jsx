import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentsIcon from "@mui/icons-material/Payments";
import Veg from "../../assets/Veg.png";
import "./Product.css";

function Product() {
  return (
    <div className="Product-container">
      <div className="Product-img-container">
        <img
          className="Product-img"
          src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/04/Godzilla-vs-kong-Skull-crawlers-Skull-island-.jpg"
          alt=""
        />
      </div>
      <div className="Product-details-container">
        <div className="Product-det-item flex al-center j-between">
          <span>Laddo</span>
          <img className="img-veg" src={Veg} alt="" />
        </div>
        <div className="Product-det-item">
          <span>₹100/-</span>
        </div>
      </div>
      <div className="txt-al-center pb-1">
        <button className="Product-btn">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
