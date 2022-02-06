import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PRODUCTS } from "../../utils/constants";
import "./IndivisualOrder.css";

function IndivisualOrder({
  id,
  items,
  orderedOn,
  shippingDetails,
  totalItems,
}) {
  const date = orderedOn?.toDate()?.toDateString();
  return (
    <div className="IndivisualOrder-container flex al-center j-between">
      <div className="IndivisualOrder-img-container">
        <img src={PRODUCTS[0].imgUrl[0]} alt="" />
        <span>{totalItems} Items</span>
      </div>

      <div className="IndivisualOrder-details">
        <p>Status : {"Delivered"}</p>
        <p>Ordered On {date}</p>
      </div>

      <p>Shipped To : {shippingDetails?.name}</p>

      <ChevronRightIcon />
    </div>
  );
}

export default IndivisualOrder;
