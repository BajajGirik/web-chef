import { useEffect } from "react";
import { connect } from "react-redux";
import { Loading } from "../../components/Loading";
import { IndivisualOrderCard } from "../../components/Orders";
import { getOrderHistory } from "../../state/order/orderActions";

function Orders({ orders, dispatch }) {
  const { loading, history } = orders;

  console.log(orders);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-container fg-1">
          {history.map((order) => (
            <IndivisualOrderCard key={order.id} {...order} />
          ))}
        </div>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
  };
}

export default connect(mapStateToProps)(Orders);
