import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { AppProvider } from "./contexts/AppContext/AppContextProvider";
import { CartProvider } from "./contexts/CartContext/CartContextProvider";
import ScrollToTop from "./helpers/ScrollToTop";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <CartProvider>
        <ScrollToTop />
        <App />
      </CartProvider>
    </AppProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
