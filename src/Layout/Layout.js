import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
