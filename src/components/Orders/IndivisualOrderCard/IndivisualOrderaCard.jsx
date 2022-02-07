import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { PRODUCTS, ROUTES } from "../../../utils/constants";
import "./IndivisualOrderCard.css";

function IndivisualOrderCard({
  id,
  items,
  orderedOn,
  shippingDetails,
  totalItems,
}) {
  const navigate = useNavigate();
  const product = PRODUCTS.find((item) => item.id === items?.[0]?.productId);
  const img = product?.imgUrl[0];
  const date = orderedOn?.toDate()?.toDateString();

  return (
    <div
      onClick={() => navigate(`${ROUTES.ORDER_INFO}?orderId=${id}`)}
      className="IndivisualOrderCard-container flex al-center j-between"
    >
      <div className="IndivisualOrderCard-img-container">
        <img src={img} alt="_ProductImg" />
        <span>{totalItems} Items</span>
      </div>

      <div className="IndivisualOrderCard-details">
        <p>Status : {"Delivered"}</p>
        <p>Ordered On {date}</p>
      </div>

      <p>Shipped To : {shippingDetails?.name}</p>

      <ChevronRightIcon />
    </div>
  );
}

export default IndivisualOrderCard;
