import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContextProvider";

import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import CartModal from "../../components/CartModal/CartModal";
import ThankYouModal from "../../components/ThankYouModal/ThankYouModal";

import Useform from "../../hooks/UseForm";
import {
  validate,
  calculateBasketPrice,
  shippingCost,
  calculateVat,
  calculateGrandTotal,
} from "../../helpers/checkoutHelpers";

import "./CheckoutPage.scss";

function CheckoutPage() {
  const { basket } = useContext(CartContext);
  const { formValues, formErrors, isSubmit, handleValueChange, handleSubmit } =
    Useform(validate);
  const [money, setMoney] = useState("");

  return (
    <div
      className={
        Object.keys(formErrors).length === 0 && isSubmit
          ? "checkout-page-gray"
          : "checkout-page"
      }
    >
      <CategoryHeader />

      {Object.keys(formErrors).length === 0 && isSubmit && (
        <ThankYouModal grandTotal={calculateGrandTotal} />
      )}

      <div className="checkout-page__content">
        <form className="checkout-page__content-form">
          <h3>CHECKOUT</h3>

          <span>BILLING DETAILS</span>
          <div className="checkout-page__content-form__wrapper">
            <div className="checkout-page__content-form__input-div">
              <div className="checkout-page__content-form__input-div-text">
                <label htmlFor="name">Name*</label>
                <p className="error">{formErrors.name}</p>
              </div>
              <input
                className={formErrors.name && "input-red"}
                id="name"
                name="name"
                type="text"
                placeholder="Alexei"
                value={formValues.name}
                onChange={handleValueChange}
              />
            </div>
            <div className="checkout-page__content-form__input-div">
              <div className="checkout-page__content-form__input-div-text">
                <label htmlFor="email">Email Address*</label>
                <p className="error">{formErrors.email}</p>
              </div>
              <input
                className={formErrors.email && "input-red"}
                id="email"
                name="email"
                type="email"
                placeholder="alexei@gmail.com"
                value={formValues.email}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="checkout-page__content-form__input-div">
            <div className="checkout-page__content-form__input-div-text">
              <label htmlFor="number">Phone Number*</label>
              <p className="error">{formErrors.number}</p>
            </div>
            <input
              className={formErrors.number && "input-red"}
              id="number"
              name="number"
              type="number"
              placeholder="+1202-555-0136"
              value={formValues.number}
              onChange={handleValueChange}
            />
          </div>

          <span>SHIPPING INFO</span>
          <div className="checkout-page__content-form__input-div address">
            <div className="checkout-page__content-form__input-div-text">
              <label htmlFor="address">Address*</label>
              <p className="error">{formErrors.address}</p>
            </div>
            <input
              className={formErrors.address && "input-red"}
              id="address"
              name="address"
              type="text"
              placeholder="1137 Williams Avenue"
              value={formValues.address}
              onChange={handleValueChange}
            />
          </div>
          <div className="checkout-page__content-form__wrapper">
            <div className="checkout-page__content-form__input-div">
              <div className="checkout-page__content-form__input-div-text">
                <label htmlFor="zip">Zip Code*</label>
                <p className="error">{formErrors.zip}</p>
              </div>
              <input
                className={formErrors.zip && "input-red"}
                id="zip"
                name="zip"
                type="number"
                placeholder="10001"
                value={formValues.zip}
                onChange={handleValueChange}
              />
            </div>
            <div className="checkout-page__content-form__input-div">
              <div className="checkout-page__content-form__input-div-text">
                <label htmlFor="city">City*</label>
                <p className="error">{formErrors.city}</p>
              </div>
              <input
                className={formErrors.city && "input-red"}
                id="city"
                name="city"
                type="text"
                placeholder="New York"
                value={formValues.city}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="checkout-page__content-form__input-div">
            <div className="checkout-page__content-form__input-div-text">
              <label htmlFor="country">Country*</label>
              <p className="error">{formErrors.country}</p>
            </div>
            <input
              className={formErrors.country && "input-red"}
              id="country"
              name="country"
              type="text"
              placeholder="United States"
              value={formValues.country}
              onChange={handleValueChange}
            />
          </div>

          <span>PAYMENT DETAILS</span>
          <div className="checkout-page__content-form__input-div">
            <div className="checkout-page__content-form__input-div-text">
              <label>Payment Method*</label>
              <p className="error">{formErrors.money}</p>
            </div>
            <div
              className={
                formErrors.money
                  ? "radio-input-div input-red"
                  : "radio-input-div"
              }
            >
              <input
                className={formErrors.money && "input-red"}
                id="e-money"
                type="radio"
                name="money"
                value="e-money"
                onChange={handleValueChange}
                onClick={(e) => setMoney(e.target.value)}
              />
              <label htmlFor="e-money">e-Money</label>
            </div>
            <div
              className={
                formErrors.money
                  ? "radio-input-div input-red"
                  : "radio-input-div"
              }
            >
              <input
                className={formErrors.money && "input-red"}
                id="cash"
                type="radio"
                value="cash"
                name="money"
                onChange={handleValueChange}
                onClick={(e) => setMoney(e.target.value)}
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
          </div>
          {money === "e-money" && (
            <div className="checkout-page__content-form__wrapper">
              <div className="checkout-page__content-form__input-div">
                <div className="checkout-page__content-form__input-div-text">
                  <label htmlFor="e-money-number">e-Money Number*</label>
                  <p className="error">{formErrors.eMoneyNumber}</p>
                </div>
                <input
                  className={formErrors.eMoneyNumber && "input-red"}
                  id="e-money-number"
                  name="eMoneyNumber"
                  type="number"
                  placeholder="238521993"
                  value={formValues.eMoneyNumber}
                  onChange={handleValueChange}
                />
              </div>
              <div className="checkout-page__content-form__input-div">
                <div className="checkout-page__content-form__input-div-text">
                  <label htmlFor="e-money-pin">e-Money PIN*</label>
                  <p className="error">{formErrors.eMoneyPin}</p>
                </div>
                <input
                  className={formErrors.eMoneyPin && "input-red"}
                  id="e-money-pin"
                  name="eMoneyPin"
                  type="number"
                  placeholder="5892"
                  value={formValues.eMoneyPin}
                  onChange={handleValueChange}
                />
              </div>
            </div>
          )}
          {money === "cash" && (
            <div className="cash-delivery">
              <img
                className="cash-delivery__img"
                src="/assets/shape.png"
                alt=""
              />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </form>

        <div className="checkout-page__summary">
          <CartModal
            title="SUMMARY"
            btnText="CONTINUE & PAY"
            onBtnClick={handleSubmit}
            shippingCost={shippingCost}
            calculateVat={calculateVat}
            calculateGrandTotal={calculateGrandTotal}
            basket={basket}
            calculateBasketPrice={calculateBasketPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
