import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import HeadphonesPage from "./containers/HeadphonesPage/HeadphonesPage";
import SpeakersPage from "./containers/SpeakersPage/SpeakersPage";
import EarphonesPage from "./containers/EarphonesPage/EarphonesPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";

import "./App.scss";
import CartPage from "./containers/CartPage/CartPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/earphones" element={<EarphonesPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Route>
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
