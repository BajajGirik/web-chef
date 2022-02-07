import { useEffect } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  IndivisualOrderInfo,
  IndivisualOrderItem,
} from "../../components/Orders";
import { getOrderHistory } from "../../state/order/orderActions";

function OrderInfo({ isLoggedIn, orders, dispatch }) {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const order = orders?.history?.find((item) => item?.id === orderId);
  console.log(order?.orderedOn?.toDate());

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [isLoggedIn]);

  return (
    <div className="p-container">
      <IndivisualOrderInfo
        id={order?.id}
        amount={order?.amount}
        shippingDetails={order?.shippingDetails}
        orderedOn={order?.orderedOn?.toDate()?.toDateString()}
      />
      {order?.items?.map((item) => (
        <IndivisualOrderItem key={item.productId} {...item} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    orders: state.orders,
  };
}

export default connect(mapStateToProps)(OrderInfo);
