import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../constants";

function Cart() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (!cartItems) {
      setItems([]);
      return;
    }

    const finalList = cartItems?.map(({ productId, qty }) => {
      const item = PRODUCTS.find((product) => product.id === productId);
      return { ...item, qty: qty };
    });

    setItems(finalList);
  }, []);

  return (null
    // <div className="Cart-container">
    //   {items ? items.map(()) : <>No Items present</>}
    // </div>
  );
}

export default Cart;
