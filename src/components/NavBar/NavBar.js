import React, { useState } from "react";

import Links from "../Links/Links";
import CartIcon from "../CartIcon/CartIcon";
import SmallNav from "../SmallNav/SmallNav";

import "./NavBar.scss";

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const smallNavClass = !isVisible
    ? "nav__mobile-nav"
    : "nav__mobile-nav nav__mobile-nav__visible";
  const toggleVisible = () => [setIsVisible((prev) => !prev)];

  const HomePage = () => {
    window.location = "/home";
  };
  return (
    <nav className="nav">
      <div className={smallNavClass}>
        <SmallNav toggleVisible={toggleVisible} />
      </div>
      <div className="nav__container">
        <img
          onClick={() => toggleVisible()}
          className="nav__container-hamburger"
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt=""
        ></img>
        <img
          className="nav__container-logo"
          src="/assets/shared/desktop/logo.svg"
          alt=""
          onClick={HomePage}
        ></img>
        <Links />
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
