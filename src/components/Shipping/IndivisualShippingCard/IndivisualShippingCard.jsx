import HomeIcon from "@mui/icons-material/Home";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeShippingDetails } from "../../../state/shipping/shippingActions";
import { ROUTES } from "../../../utils/constants";
import "./IndivisualShippingCard.css";

function IndivisualShippingCard({
  id,
  name,
  phone,
  address,
  //   city,
  pincode,
  dispatch,
}) {
  const navigate = useNavigate();

  return (
    <div className="IndivisualShippingCard-container">
      <section>
        <h2>{name}</h2>
        <div className="flex">
          <HomeIcon fontSize="small" />
          <span>
            {address} - {pincode}
          </span>
        </div>
        <div className="flex">
          <PhoneIphoneIcon fontSize="small" />
          <span>{phone}</span>
        </div>
      </section>

      <div>
        <button
          onClick={() => navigate(`${ROUTES.EDIT_SHIPPING_DETAILS}?id=${id}`)}
        >
          Edit
        </button>
        <button onClick={() => dispatch(removeShippingDetails(id))}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default connect(null)(IndivisualShippingCard);
