import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

function Button({ btnText, link, arrow, onBtnClick, isBtnDisabled }) {
  const handleBtnClick = () => {
    if (onBtnClick) {
      onBtnClick();
    }
  };
  return (
    <button
      disabled={isBtnDisabled}
      className="btn"
      onClick={() => handleBtnClick()}
    >
      {link ? (
        <Link className="btn__text" to={{ pathname: link }}>
          {btnText}
          {arrow && arrow}
        </Link>
      ) : (
        btnText
      )}
    </button>
  );
}

export default Button;
