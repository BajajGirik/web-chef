import React from "react";
import { Link } from "react-router-dom";
import { Carousal } from "../../components/UI/Caraousal";
import { HOME_CAROUSEL_IMGS } from "../../constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";

function Home() {
  return (
    <div className="m-nav plr-1 flex-c al-center">
      <Carousal classname="Home-carousal" imgArray={HOME_CAROUSEL_IMGS}>
        <Link
          className="link Home-carousal-btn flex al-center"
          to="/product/cakes"
        >
          Order Cakes &nbsp; <ArrowForwardIcon />
        </Link>
      </Carousal>
      <Carousal classname="Home-carousal" imgArray={HOME_CAROUSEL_IMGS}>
        <Link
          className="link Home-carousal-btn flex al-center"
          to="/product/ladoos"
        >
          Order Ladoos &nbsp; <ArrowForwardIcon />
        </Link>
      </Carousal>
    </div>
  );
}

export default Home;
