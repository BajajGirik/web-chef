import React, { useEffect, useState } from "react";
import { IndivisualCartItem, OrderSummary, CartEmpty } from "../../components/Cart";
import { PRODUCTS } from "../../constants";
import "./Cart.css";

function Cart() {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const refreshItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (!cartItems) {
      setItems([]);
      setTotalAmount(0);
      return;
    }

    let total = 0;

    const finalList = cartItems?.map(({ productId, qty }) => {
      const item = PRODUCTS.find((product) => product.id === productId);
      total += item.pricing[0].price * qty;
      return { ...item, qty: qty };
    });

    setItems(finalList);
    setTotalAmount(total);
  };

  useEffect(() => {
    refreshItems();
  }, []);

  return (
    <div className="m-nav plr-1">
      {items.length ? (
        <div className="Cart-container">
          <div className="flex-c">
            {items.map(({ id, name, pricing, imgUrl, qty }) => (
              <IndivisualCartItem
                key={id}
                id={id}
                name={name}
                pricing={pricing}
                imgUrl={imgUrl}
                qty={qty}
                refreshItems={refreshItems}
              />
            ))}
          </div>
          <OrderSummary items={items} totalAmount={totalAmount} />
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default Cart;
