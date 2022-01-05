import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Terms, PrivacyPolicy, RefundPolicy } from "./pages/T&C";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "./state/user/userActions";

function App(props) {
  const { user, dispatch } = props;
  useEffect(() => {
    const unsubscribe = dispatch(getUser());
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        {/* <Route path="/auth/register" element={<Home />} /> */}
        <Route path="product/:category" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="tnc" element={<Terms />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="refundpolicy" element={<RefundPolicy />} />
        {/* <Route path="/" element={<Navbar />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
      </Routes>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(App);
