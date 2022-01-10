import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./IndivisualCartItem.css";
import { VEG_ICON_URI } from "../../../constants";
import {deleteFromCart, saveToCart} from "../../../state/cart/cartActions";

function IndivisualCartItem({id, name, pricing, imgUrl, qty, ...rest}) {

	const {dispatch} = props;
	
  const decreaseQty = () => {
    if (qty <= 1) return;
	  dispatch(saveToCart(id, qty - 1, -1 * pricing?.[0]?.price));
  };

  const increaseQty = () => {
    if (qty >= 5) return;
	  dispatch(saveToCart(id, qty + 1, pricing?.[0]?.price));
  };

  const removeFromCart = () => {
	dispatch(deleteFromCart(id, qty*pricing?.[0]?.price))
  };

  return (
    <div className="IndivisualCartItem-container flex j-around">
      {/* left part (img) */}
      <div className="IndivisualCartItem-img-container">
        <img src={imgUrl[0]} alt="_ProductImg" />
      </div>

      {/* right part  */}
      <div className="flex-c j-around w-50">
        {/* row one  */}
        <div className="flex j-between">
          <div className="flex">
            <span className="w-min"> {name} </span>
            <img className="img-veg" src={VEG_ICON_URI} alt="_Veg" />
          </div>
          <DeleteIcon
            onClick={removeFromCart}
            htmlColor="red"
            className="cur-pointer"
          />
        </div>

        {/* row two */}
        <div className="flex al-center j-between">
          <div className="flex al-center">
            <RemoveIcon
              onClick={decreaseQty}
              className="icon bg-cross cur-pointer"
            />
            &nbsp;{qty}&nbsp;
            <AddIcon
              onClick={increaseQty}
              className="icon bg-green cur-pointer"
            />
          </div>
          <span className="price-txt">₹{qty * pricing?.[0]?.price}</span>
        </div>
      </div>
    </div>
  );
}

export default IndivisualCartItem;
