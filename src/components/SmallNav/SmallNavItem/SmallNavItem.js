import React from "react";
import Button from "../../Button/Button";
import "./SmallNavItem.scss";

function SmallNavItem({ img, title, navigateTo, toggleVisible }) {
  return (
    <div className="small-nav-item">
      <img className="small-nav-item__image" src={img} alt="" />
      <div className="small-nav-item__content">
        <h6>{title}</h6>
        <Button
          navigateTo={navigateTo}
          onBtnClick={toggleVisible}
          btnText="SHOP"
          arrow={
            <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
          }
        />
      </div>
    </div>
  );
}

export default SmallNavItem;
