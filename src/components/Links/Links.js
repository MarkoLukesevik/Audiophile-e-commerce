import React from "react";
import { NavLink } from "react-router-dom";

import "./Links.scss";

function Links() {
  const navMenu = [
    { name: "HOME", value: "home", url: "/home" },
    { name: "HEADPHONES", value: "headphones", url: "/headphones" },
    { name: "SPEAKERS", value: "speakers", url: "/speakers" },
    { name: "EARPHONES", value: "earphones", url: "/earphones" },
  ];
  return (
    <div className="links">
      {navMenu.map((navItem) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#D87D4A" : "#ffffff",
              };
            }}
            className="links__link-item"
            to={navItem.url}
            key={navItem.value}
          >
            {navItem.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Links;
