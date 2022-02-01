import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { ShippingList, AddEditShipping } from "./pages/Shipping/";
import { Terms, PrivacyPolicy, RefundPolicy } from "./pages/T&C";
import { Home } from "./pages/Home";
import { Login, SignUp } from "./pages/Auth";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "./state/user/userActions";
import { ROUTES } from "./utils/constants";
import { Orders } from "./pages/Orders";

function App({ user, cart, shipping, orders, dispatch }) {
  const loading = user.loading || cart.loading;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (loading) return "Loading";

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.CAKE} element={<Products params="cakes" />} />
        <Route path={ROUTES.LADOOS} element={<Products params="ladoos" />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.SHIPPING} element={<ShippingList />} />
        <Route
          path={ROUTES.ADD_SHIPPING_DETAILS}
          element={<AddEditShipping />}
        />
        <Route
          path={ROUTES.EDIT_SHIPPING_DETAILS}
          element={<AddEditShipping />}
        />
        <Route path={ROUTES.ORDERS} element={<Orders />} />
        <Route path={ROUTES.TNC} element={<Terms />} />
        <Route path={ROUTES.PRIVACYPOLICY} element={<PrivacyPolicy />} />
        <Route path={ROUTES.REFUNDPOLICY} element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
