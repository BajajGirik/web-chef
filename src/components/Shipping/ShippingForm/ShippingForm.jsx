import { TextField, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addShippingDetails,
  editShippingDetails,
} from "../../../state/shipping/shippingActions";
import { ROUTES } from "../../../utils/constants";
import {
  getPhoneNumberError,
  getPinCodeError,
  shippingErrors,
} from "../../../utils/validations";
import "./ShippingForm.css";

function ShippingForm({ isCheckout, id, shipInfo, dispatch }) {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [activeFields, setActiveFields] = useState({
    phoneActive: false,
    pincodeActive: false,
  });
  const [formErrors, setFormErrors] = useState({
    phoneError: "",
    pincodeError: "",
  });

  const navigateToShippingList = () => {
    isCheckout ? navigate(ROUTES.SHIPPING) : navigate(ROUTES.CHECKOUT_SHIPPING);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (shippingErrors(userDetails.phone, userDetails.pincode)) return;

    if (id === undefined)
      dispatch(addShippingDetails(userDetails, navigateToShippingList));
    else dispatch(editShippingDetails(id, userDetails, navigateToShippingList));
  };

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "phone") {
      setFormErrors({
        ...formErrors,
        phoneError: getPhoneNumberError(event.target.value),
      });
    } else if (event.target.name === "pincode") {
      setFormErrors({
        ...formErrors,
        pincodeError: getPinCodeError(event.target.value),
      });
    }
  };

  useEffect(() => {
    setUserDetails({
      name: shipInfo?.name ? shipInfo.name : "",
      phone: shipInfo?.phone ? shipInfo.phone : "",
      address: shipInfo?.address ? shipInfo.address : "",
      city: shipInfo?.city ? shipInfo.city : "",
      pincode: shipInfo?.pincode ? shipInfo.pincode : "",
    });
  }, [shipInfo]);

  return (
    <div className="Shipping-form-container mh-auto">
      <h1 className="txt-al-center">Shipping Details</h1>
      <form onSubmit={handleFormSubmit} className="txt-al-center">
        <TextField
          className="input-fields"
          name="name"
          label="Full Name"
          value={userDetails.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          className="input-fields"
          name="phone"
          label="Phone No"
          value={userDetails.phone}
          onChange={handleChange}
          error={!activeFields.phoneActive && formErrors.phoneError !== ""}
          helperText={!activeFields.phoneActive && formErrors.phoneError}
          onFocus={() =>
            setActiveFields({ ...activeFields, phoneActive: true })
          }
          onBlur={() =>
            setActiveFields({ ...activeFields, phoneActive: false })
          }
          variant="outlined"
          fullWidth
        />
        <Select
          className="input-fields"
          value="India"
          label="Country"
          fullWidth
          disabled
        >
          <MenuItem value="India">India</MenuItem>
        </Select>
        <TextField
          className="input-fields"
          name="address"
          label="Address"
          value={userDetails.address}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          className="input-fields"
          name="city"
          label="Town/City"
          value={userDetails.city}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          className="input-fields"
          name="pincode"
          label="Pincode"
          value={userDetails.pincode}
          onChange={handleChange}
          error={!activeFields.pincodeActive && formErrors.pincodeError !== ""}
          helperText={!activeFields.pincodeActive && formErrors.pincodeError}
          onFocus={() =>
            setActiveFields({ ...activeFields, pincodeActive: true })
          }
          onBlur={() =>
            setActiveFields({ ...activeFields, pincodeActive: false })
          }
          type="number"
          variant="outlined"
          fullWidth
        />

        <button className="Shipping-form-btn">Save</button>
      </form>
    </div>
  );
}

export default connect(null)(ShippingForm);
