import React from "react";
import { REMOVE_ALL_PRODUCTS_FROM_BASKET } from "../../contexts/CartContext/constants";

import Button from "../Button/Button";
import CartModalItem from "../CartModalItem/CartModalItem";

import { calculateBasketPrice } from "../../helpers/checkoutHelpers";

import "./CartModal.scss";

function CartModal({
  title,
  btnText,
  onBtnClick,
  isBtnDisabled,
  basket,
  removeAllCartProducts,
  increaseProductQuantity,
  decreaseProductQuantity,
  shippingCost,
  calculateVat,
  calculateGrandTotal,
}) {
  return (
    <div className="cart-modal">
      <div className="cart-modal__header">
        <h6>{title}</h6>
        {removeAllCartProducts && (
          <Button
            btnText="Remove all"
            onBtnClick={() =>
              removeAllCartProducts({ type: REMOVE_ALL_PRODUCTS_FROM_BASKET })
            }
          />
        )}
      </div>

      <div className="cart-modal__items">
        {!!basket?.length &&
          basket.map((item) => {
            return (
              <CartModalItem
                key={item.id}
                {...item}
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
              />
            );
          })}
      </div>

      <div className="cart-modal__end">
        <div className="cart-modal__end-price">
          <p>TOTAL</p>
          <h6>$ {calculateBasketPrice(basket)}</h6>
        </div>

        {shippingCost && (
          <div className="cart-modal__end-price">
            <p>Shipping</p>
            <h6>$ {shippingCost(basket)}</h6>
          </div>
        )}

        {calculateVat && (
          <div className="cart-modal__end-price">
            <p>VAT (INCLUDED)</p>
            <h6>$ {calculateVat(basket)}</h6>
          </div>
        )}

        {calculateGrandTotal && (
          <div className="cart-modal__end-price grand">
            <p>GRAND TOTAL</p>
            <h6 className="grand__price">$ {calculateGrandTotal(basket)}</h6>
          </div>
        )}

        <Button
          btnText={btnText}
          onBtnClick={onBtnClick && onBtnClick}
          isBtnDisabled={isBtnDisabled}
        />
      </div>
    </div>
  );
}

export default CartModal;
