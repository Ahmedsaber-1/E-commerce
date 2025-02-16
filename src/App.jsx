import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Shop } from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";

function App() {
  const [order, setorder] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/checkout"
            element={<Checkout setorder={setorder} />}
          ></Route>
          <Route
            path="/order-confirmation"
            element={<Order order={order} />}
          ></Route>
          <Route path="/filter-data" element={<FilterData />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
