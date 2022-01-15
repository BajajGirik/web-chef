import React from "react";
import { useParams } from "react-router-dom";
import { IndivisualProduct } from "../../components/Product";
import { PRODUCTS } from "../../constants";
import "./Products.css";

function Products() {
  const params = useParams();
  const productArray = PRODUCTS.filter(
    (product) => product.type === params.category
  );

  return (
    <div key={params.category} className="Products-container p-nav">
      {productArray?.map((props) => (
        <IndivisualProduct key={props.id} {...props} />
      ))}
    </div>
  );
}

export default Products;
