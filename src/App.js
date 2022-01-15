import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Terms, PrivacyPolicy, RefundPolicy } from "./pages/T&C";
import { Home } from "./pages/Home";
import { Login, SignUp } from "./pages/Auth";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "./state/user/userActions";
import { Shipping } from "./pages/Shipping";
import { Popup } from "./components/UI/Popup";

function App(props) {
  const { user, dispatch } = props;
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/log-in" element={<Login />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="product/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="tnc" element={<Terms />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="refundpolicy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
