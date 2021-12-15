import React from "react";
import { useParams } from "react-router-dom";
import { IndivisualProduct } from "../../components/IndivisualProduct";
import { PRODUCTS } from "../../constants";

function Products() {
  const params = useParams();
  const productArray = PRODUCTS.filter(
    (product) => product.type === params.category
  );

  return (
    <div className="flex flex-wrap">
      {productArray?.map(({ id, name, pricing, imgUrl }) => (
        <IndivisualProduct
          key={id}
          id={id}
          name={name}
          pricing={pricing}
          imgUrl={imgUrl}
        />
      ))}
    </div>
  );
}

export default Products;
