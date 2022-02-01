import { useEffect } from "react";
import { connect } from "react-redux";
import { IndivisualOrder } from "../../components/Orders";
import { getOrderHistory } from "../../state/order/orderActions";

function Orders({ orders, dispatch }) {
  const { loading, history } = orders;

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="p-container fg-1">
          {history.map((order) => (
            <IndivisualOrder key={order.id} />
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
