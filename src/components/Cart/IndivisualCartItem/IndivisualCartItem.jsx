import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./IndivisualCartItem.css";
import { VEG_ICON_URI } from "../../../constants";

function IndivisualCartItem({ id, name, pricing, imgUrl, qty, refreshItems }) {
  const decreaseQty = () => {
    if (qty <= 1) return;

    let items = JSON.parse(localStorage.getItem("cart"));
    const index = items.findIndex((item) => item.productId === id);

    items[index].qty--;
    localStorage.setItem("cart", JSON.stringify(items));

    refreshItems();
  };

  const increaseQty = () => {
    if (qty >= 5) return;

    let items = JSON.parse(localStorage.getItem("cart"));
    const index = items.findIndex((item) => item.productId === id);

    items[index].qty++;
    localStorage.setItem("cart", JSON.stringify(items));

    refreshItems();
  };

  const removeFromCart = () => {
    let items = JSON.parse(localStorage.getItem("cart"));
    const updatedItems = items.filter((item) => item.productId !== id);

    localStorage.setItem("cart", JSON.stringify(updatedItems));
    refreshItems();
  };

  return (
    <div className="IndivisualCartItem-container">
      <div className="flex">
        <img
          className="IndivisualCartItem-img"
          src={imgUrl[0]}
          alt="_ProductImg"
        />
        <div className="IndivisualCartItem-details flex j-between">
          <div className="flex-c">
            <span>{name}</span>
            <span className="price-txt">₹{pricing?.[0]?.price}/-</span>
          </div>
          <img className="img-veg" src={VEG_ICON_URI} alt="_Veg" />
        </div>
      </div>
      <div className="IndivisualCartItem-btns flex al-center j-around">
        <div>
          <div className="flex al-center">
            <RemoveIcon onClick={decreaseQty} className="icon bg-cross" />
            &nbsp;&nbsp;{qty}&nbsp;&nbsp;
            <AddIcon onClick={increaseQty} className="icon bg-green" />
          </div>
        </div>
        <DeleteIcon onClick={removeFromCart} htmlColor="red" />
      </div>
    </div>
  );
}

export default IndivisualCartItem;
