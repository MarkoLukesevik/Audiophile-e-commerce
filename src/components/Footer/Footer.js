import React from "react";

import Links from "../Links/Links";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-links">
          <img
            className="logo"
            src="./assets/shared/desktop/logo.svg"
            alt=""
          ></img>
          <Links />
        </div>
        <p className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footer__end">
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
          <div className="footer__icons">
            <img src="./assets/shared/desktop/icon-facebook.svg" alt=""></img>
            <img src="./assets/shared/desktop/icon-twitter.svg" alt=""></img>
            <img src="./assets/shared/desktop/icon-instagram.svg" alt=""></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
