import React from "react";

import NumericInput from "../../components/NumericInput/NumericInput";
import Button from "../Button/Button";

import "./Product.scss";

function Product({
  isNew,
  name,
  description,
  link,
  btnText,
  image,
  onBtnClick,
  price,
  quantity,
  increaseProductQuantity,
  decreaseProductQuantity,
}) {
  return (
    <div className="product">
      {image && <img className="product__img" src={image.desktop} alt="" />}
      <div className="product__content">
        {isNew && <p className="product__content-new-product">NEW PRODUCT</p>}
        <h2>{name}</h2>
        {description && <p>{description}</p>}
        {price && <h6>$ {price}</h6>}
        <div className="product__content-buttons">
          {quantity && (
            <NumericInput
              quantity={quantity}
              onInputIncrease={() => increaseProductQuantity("+")}
              onInputDecrease={() => decreaseProductQuantity("-")}
            />
          )}
          <Button btnText={btnText} link={link} onBtnClick={onBtnClick} />
        </div>
      </div>
    </div>
  );
}

export default Product;
