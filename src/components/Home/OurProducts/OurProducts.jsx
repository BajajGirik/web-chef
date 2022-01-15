import React from "react";
import { Link } from "react-router-dom";
import { Carousal } from "../../UI/Caraousal";
import "./OurProducts.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OurProducts({
  carouselImgs,
  heading,
  starterDesc,
  boldTxt,
  finalDesc,
  btnLink,
  btnText,
}) {
  return (
    <div className="OurProducts-container flex j-between">
      <Carousal classname="OurProducts-carousal" imgArray={carouselImgs} />
      <div className="OurProducts-desc-container flex-c j-between txt-al-center">
        <div>
          <h1>{heading}</h1>
          <p>
            {starterDesc} <b>{boldTxt}</b> {finalDesc}
          </p>
        </div>
        <Link className="OurProducts-btn link flex al-center" to={btnLink}>
          {btnText} &nbsp;
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;
