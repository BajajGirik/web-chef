import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
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
