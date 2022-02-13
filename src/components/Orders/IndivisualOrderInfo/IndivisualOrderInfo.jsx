import { PRODUCTS, VEG_ICON_URI } from "../../../utils/constants";
import {OrderDetails, OtherDetails, ShippingDetails} from "../../Checkout";
import BgImg from "../../../assets/background.jpg";
import "./IndivisualOrderInfo.css";

function IndivisualOrderInfo({ id, amount, shippingDetails, orderedOn }) {
  console.log(id);
  return (
    <div className="IndivisualOrderInfo-container">
      <div className="flex j-between">
        <OrderDetails amount={amount} />
        <ShippingDetails {...shippingDetails} />
      </div>
      <div className="flex j-between">
        <OtherDetails orderId={id} orderedOn={orderedOn} />
      </div>
    </div>
  );
}

function IndivisualOrderItem({ productId, qty }) {
  const product = PRODUCTS.find(({ id }) => id === productId);
  const image = product?.imgUrl?.[0];
  return (
    <div style={{backgroundImage: `url(${BgImg})`}} className="IndivisualOrderItem flex al-center j-between">
      <img src={image} alt="_ProductImg" />
      <p><b>{product?.name}</b> <img className="img-veg" src={VEG_ICON_URI} alt="_Veg" /> </p>
      <p><b>X {qty}</b></p>
    </div>
  );
}

export { IndivisualOrderInfo, IndivisualOrderItem };
