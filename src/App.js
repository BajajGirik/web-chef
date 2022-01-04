import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Terms, PrivacyPolicy, RefundPolicy } from "./pages/T&C";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Signed in");
      } else {
        console.log("User Signed out");
      }
    });
  });

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

export default App;
