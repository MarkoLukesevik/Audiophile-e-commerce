import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Button.scss";

function Button({
  btnText,
  link,
  arrow,
  onBtnClick,
  isBtnDisabled,
  navigateTo,
}) {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (typeof onBtnClick === "function") {
      onBtnClick();
    }
    if (navigateTo) {
      navigate(navigateTo);
    }
  };
  return (
    <button
      disabled={isBtnDisabled}
      className="btn"
      onClick={() => handleBtnClick()}
    >
      {/* {link ? (
        <Link className="btn__text" to={{ pathname: link }}>
          {btnText}
          {arrow && arrow}
        </Link>
      ) : ( */}
      {btnText}
      {/* )} */}
    </button>
  );
}

export default Button;
