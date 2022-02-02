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

  isCheckout,
  selectedShippingId,
  setSelectedShippingId,

  dispatch,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => setSelectedShippingId(id)}
      className="IndivisualShippingCard-container flex al-center"
    >
      {isCheckout && (
        <input type="radio" value={id} checked={id === selectedShippingId} />
      )}
      <div>
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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    checkoutShippingStage: state.checkout.stage.shipping,
  };
}

export default connect(mapStateToProps)(IndivisualShippingCard);
