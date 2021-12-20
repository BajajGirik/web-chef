import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="product/:category" element={<Products />} />
        <Route path="cart" element={<Cart />} />
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
