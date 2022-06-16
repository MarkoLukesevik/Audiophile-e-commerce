import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContextProvider";

import NavBar from "../../components/NavBar/NavBar";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import CartModal from "../../components/CartModal/CartModal";

import "./CartPage.scss";

function CartPage() {
  const { basket, dispatch } = useContext(CartContext);

  const [disabledCheckoutBtn, setdisabledCheckoutBtn] = useState(true);

  useEffect(() => {
    if (basket?.length) {
      return setdisabledCheckoutBtn(false);
    }
    setdisabledCheckoutBtn(true);
  }, [basket]);

  const goToCheckoutPage = () => {
    window.location = "/checkoutPage";
  };

  return (
    <div className="cart-page">
      <NavBar />
      <CategoryHeader />
      <div className="cart-page__content">
        <div className="cart-page__content-checkout">
          <CartModal
            title={`CART (${basket?.length})`}
            btnText="CHECKOUT"
            onBtnClick={goToCheckoutPage}
            isBtnDisabled={disabledCheckoutBtn}
            basket={basket}
            removeAllCartProducts={dispatch}
            increaseProductQuantity={dispatch}
            decreaseProductQuantity={dispatch}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
