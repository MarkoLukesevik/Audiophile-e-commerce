import React from "react";

import SmallNavItem from "./SmallNavItem/SmallNavItem";

import "./SmallNav.scss";

function SmallNav({ toggleVisible }) {
  return (
    <nav className="small-nav">
      <SmallNavItem
        title="HEADPHONES"
        img="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        navigateTo="/headphones"
        toggleVisible={toggleVisible}
      />
      <SmallNavItem
        title="SPEAKERS"
        img="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        navigateTo="/speakers"
        toggleVisible={toggleVisible}
      />
      <SmallNavItem
        title="EARPHONES"
        img="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        navigateTo="/earphones"
        toggleVisible={toggleVisible}
      />
    </nav>
  );
}

export default SmallNav;
