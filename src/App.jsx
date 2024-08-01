import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarCom from "./components/Navbar";
import DetailProduct from "./components/ProductDetail";
import FooterComponent from "./components/Footer";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />{" "}
          {/* Correct component */}
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
