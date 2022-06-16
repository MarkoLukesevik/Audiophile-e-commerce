import React from "react";

import "./InTheBox.scss";

export default function InTheBox(props) {
  return (
    <div className="in-the-box">
      <span>{props.quantity}x</span>
      <p>{props.item}</p>
    </div>
  );
}
