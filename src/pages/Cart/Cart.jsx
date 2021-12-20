import React, { useEffect, useState } from "react";
import IndivisualCartItem from "../../components/Cart/IndivisualCartItem";
import { PRODUCTS } from "../../constants";

function Cart() {
  const [items, setItems] = useState([]);

  const refreshItems = () => {
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
  }
  
  useEffect(() => {
    refreshItems();
  }, []);
  
  
  return (
    <div className="flex-c m-nav plr-1">
      {items.length ? (
        items.map(({ id, name, pricing, imgUrl, qty }) => (
          <IndivisualCartItem
            key={id}
            id={id}
            name={name}
            pricing={pricing}
            imgUrl={imgUrl}
            qty={qty}
            refreshItems={refreshItems}
          />
        ))
      ) : (
        <>No Items present</>
      )}
    </div>
  );
}

export default Cart;
