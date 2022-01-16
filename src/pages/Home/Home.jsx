import React from "react";
import { HOME_PRODUCTS_LIST } from "../../utils/constants";
import { OurProducts } from "../../components/Home/OurProducts";

function Home() {
  return (
    <div className="p-container flex-c al-center">
      {HOME_PRODUCTS_LIST.map((props) => (
        <OurProducts key={props.heading} {...props} />
      ))}
    </div>
  );
}

export default Home;
