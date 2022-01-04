import React from "react";
import { Link } from "react-router-dom";
import { Carousal } from "../../components/UI/Caraousal";
import { HOME_PRODUCTS_LIST } from "../../constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";

function Home() {
  return (
    <div className="m-nav plr-1 flex-c al-center bg-h">
      {HOME_PRODUCTS_LIST.map(
        ({
          carouselImgs,
          heading,
          starterDesc,
          boldTxt,
          finalDesc,
          btnLink,
          btnText,
        }) => (
          <div key={heading} className="Home-product-container flex j-between">
            <Carousal classname="Home-carousal" imgArray={carouselImgs} />
            <div className="Home-product-desc-container flex-c j-between txt-al-center">
              <div>
                <h1>{heading}</h1>
                <p>
                  {starterDesc} <b>{boldTxt}</b> {finalDesc}
                </p>
              </div>
              <Link className="Home-btn link flex al-center" to={btnLink}>
                {btnText} &nbsp;
                <ArrowForwardIcon />
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Home;
