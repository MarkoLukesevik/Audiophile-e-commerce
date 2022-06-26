import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContextProvider";

import CartModalItem from "../CartModalItem/CartModalItem";
import Button from "../Button/Button";

import { REMOVE_ALL_PRODUCTS_FROM_BASKET } from "../../contexts/CartContext/constants";
import { calculateGrandTotal } from "../../helpers/checkoutHelpers";

import "./ThankYouModal.scss";

function ThankYouModal() {
  const { basket, dispatch } = useContext(CartContext);

  const backToHome = () => {
    dispatch({ type: REMOVE_ALL_PRODUCTS_FROM_BASKET });
  };
  return (
    <div className="thank-you">
      <div className="thank-you__content">
        <div className="thank-you__content-success">✔</div>
        <h3>THANK YOU FOR YOUR ORDER</h3>
        <p>You will receive an email confirmation shortly.</p>
        <div className="thank-you__content-main">
          <div className="thank-you__content-main__items">
            {basket.map((item) => {
              return <CartModalItem key={item.id} {...item} />;
            })}
          </div>
          <div className="thank-you__content-main__total">
            <p>GRAND TOTAL</p>
            <span>$ {calculateGrandTotal(basket)}</span>
          </div>
        </div>
        <Button
          btnText="BACK TO HOME"
          onBtnClick={backToHome}
          navigateTo="/home"
        />
      </div>
    </div>
  );
}

export default ThankYouModal;
