import React, { useEffect } from "react";
import MainPage from "./main.jsx";
import PruductsComponent from "./prodcts.jsx";
import ProductDetail from "./productDetail.jsx";
import Payment from "./bag.jsx";
import Collection from "./collection.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Register from "./register.jsx";
import bgAir1 from "./img/bgAir1.jpeg";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundImage = `url(${bgAir1})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundColor = "transparent";
    } else if (
      location.pathname === "/product" ||
      location.pathname === "/register" ||
      location.pathname === "/added/product"
    ) {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#f5f5f5";
    }

    return () => {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "white";
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product" element={<PruductsComponent />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:index" element={<ProductDetail />} />
      <Route path="/payment/:index" element={<Payment />} />
      <Route path="/newCollection" element={<Collection />} />
    </Routes>
  );
}

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
