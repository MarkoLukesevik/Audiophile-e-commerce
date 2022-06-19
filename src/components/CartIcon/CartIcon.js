import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext/CartContextProvider";

import "./CartIcon.scss";

function CartIcon() {
  const { basket } = useContext(CartContext);
  const cartLengthClass = !basket?.length
    ? "cart-icon__length"
    : "cart-icon__length cart-icon__length-active";
  return (
    <div className="cart-icon">
      <div className={cartLengthClass}>{basket?.length}</div>
      <NavLink to="/cartPage">
        <img
          className="cart__icon-image"
          src="/assets/shared/desktop/icon-cart.svg"
          alt=""
        ></img>
      </NavLink>
    </div>
  );
}

export default CartIcon;
