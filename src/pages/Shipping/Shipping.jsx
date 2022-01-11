import { TextField, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Shipping.css";

function Shipping(props) {
  const { user, dispatch } = props;

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
  });

  useEffect(() => {
    setUserDetails({
      name: user.data?.name ? user.data.name : "",
      phone: user.data?.phone ? user.data.phone : "",
      address: user.data?.address ? user.data.address : "",
      pincode: user.data?.pincode ? user.data.pincode : "",
      city: user.data?.city ? user.data.city : "",
    });
  }, [user]);

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="p-nav">
      <div className="Shipping-container">
        <h1 className="txt-al-center">Shipping Details</h1>
        <form>
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
            name="pincode"
            label="Pincode"
            value={userDetails.pincode}
            onChange={handleChange}
            type="number"
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
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Shipping);
