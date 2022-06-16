import React from "react";

import SmallNavItem from "./SmallNavItem/SmallNavItem";

import "./SmallNav.scss";

function SmallNav({ toggleVisible }) {
  return (
    <nav className="small-nav">
      <SmallNavItem
        title="HEADPHONES"
        img="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        link="/headphones"
        toggleVisible={toggleVisible}
      />
      <SmallNavItem
        title="SPEAKERS"
        img="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        link="/speakers"
        toggleVisible={toggleVisible}
      />
      <SmallNavItem
        title="EARPHONES"
        img="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        link="/earphones"
        toggleVisible={toggleVisible}
      />
    </nav>
  );
}

export default SmallNav;
