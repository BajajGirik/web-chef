import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { PRODUCTS, ROUTES } from "../../../utils/constants";
import "./IndivisualOrderCard.css";

function IndivisualOrderCard({
  id,
  items,
  orderedOn,
  orderStatus,
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
        <p>
          <b>Status :</b> {orderStatus === 1 ? "Delivered ✅" : "Pending 🟡"}
        </p>
        <p>
          <b>Ordered On</b> {date}
        </p>
      </div>

      <div className="IndivisualOrderCard-details">
        <p>
          <b>Shipped To :</b> {shippingDetails?.name}
        </p>
      </div>

      <ChevronRightIcon />
    </div>
  );
}

export default IndivisualOrderCard;
