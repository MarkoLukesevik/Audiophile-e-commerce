import React from "react";
import Button from "../Button/Button";
import "./NumericInput.scss";

function NumericInput({ onInputIncrease, onInputDecrease, quantity }) {
  return (
    <div className="numeric-input">
      <Button btnText="-" onBtnClick={onInputDecrease} />
      <div className="numeric-input__count">{quantity}</div>
      <Button btnText="+" onBtnClick={onInputIncrease} />
    </div>
  );
}

export default NumericInput;
