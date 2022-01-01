import React from "react";
import { Carousal } from "../../components/UI/Caraousal";
import { HOME_CAROUSEL_IMGS } from "../../constants";
import "./Home.css";

function Home() {
  console.log(HOME_CAROUSEL_IMGS);
  return (
    <div className="m-nav plr-1 flex j-between">
      <Carousal classname="Home-carousal" imgArray={HOME_CAROUSEL_IMGS} />
      <Carousal classname="Home-carousal" imgArray={HOME_CAROUSEL_IMGS} />
    </div>
  );
}

export default Home;
