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
    cartItems?.map(({ productId, qty }) => {
      const item = PRODUCTS.find((product) => product.id === productId);
      console.log({ ...item, qty: qty });
      return { ...item, qty: qty };
    });
  }, []);

  return (
    <div className="Cart-container">
      {/* {items ?  : <>No Items present</>} */}
    </div>
  );
}

export default Cart;
