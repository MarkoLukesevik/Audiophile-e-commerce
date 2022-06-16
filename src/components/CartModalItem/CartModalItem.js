import React from "react";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../contexts/CartContext/constants";
import NumericInput from "../NumericInput/NumericInput";
import "./CartModalItem.scss";

function CartModalItem({
  id,
  image,
  slug,
  price,
  quantity,
  increaseProductQuantity,
  decreaseProductQuantity,
}) {
  return (
    <div className="cart-modal-item">
      <div className="cart-modal-item__start">
        <img
          className="cart-modal-item__start-img"
          src={image.desktop}
          alt=""
        />
        <div className="cart-modal-item__start-content">
          <p>{slug.toUpperCase()}</p>
          <span>$ {price}</span>
        </div>
      </div>

      {increaseProductQuantity && decreaseProductQuantity ? (
        <NumericInput
          quantity={quantity}
          onInputIncrease={() =>
            increaseProductQuantity({ type: INCREASE_QUANTITY, payload: id })
          }
          onInputDecrease={() =>
            decreaseProductQuantity({ type: DECREASE_QUANTITY, payload: id })
          }
        />
      ) : (
        <span className="item-quantity">x {quantity}</span>
      )}
    </div>
  );
}

export default CartModalItem;
