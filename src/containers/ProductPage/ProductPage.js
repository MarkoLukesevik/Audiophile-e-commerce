import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../../contexts/AppContext/AppContextProvider";
import { CartContext } from "../../contexts/CartContext/CartContextProvider";
import { ADD_TO_CART } from "../../contexts/CartContext/constants";

import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import Product from "../../components/Product/Product";
import SmallNav from "../../components/SmallNav/SmallNav";
import BestGear from "../../components/BestGear/BestGear";
import InTheBox from "../../components/InTheBox/InTheBox";

import "./ProductPage.scss";

function ProductPage() {
  const { data } = useContext(AppContext);
  const { dispatch } = useContext(CartContext);

  const [product, setProduct] = useState();

  const params = useParams();
  useEffect(() => {
    if (!!data?.length) {
      const foundProduct = data.find((product) => product.id == params.id);
      setProduct({ ...foundProduct, quantity: 1 });
    }
  }, [data]);

  const handleProductUQuantityUpdate = (func) => {
    if (func === "+") {
      return setProduct({
        ...product,
        quantity: product.quantity + 1,
      });
    } else if (func === "-") {
      if (product.quantity === 1) {
        return;
      }
      return setProduct({
        ...product,
        quantity: product.quantity - 1,
      });
    }
  };

  return (
    <div className="product-page">
      <CategoryHeader />
      <Product
        {...product}
        increaseProductQuantity={handleProductUQuantityUpdate}
        decreaseProductQuantity={handleProductUQuantityUpdate}
        btnText="ADD TO CART"
        onBtnClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
      />

      <div className="product-page__info">
        <div className="product-page__info-features">
          <h3>FEATURES</h3>
          <p>{product?.features}</p>
        </div>
        <div className="product-page__info-includes">
          <h3>IN THE BOX</h3>
          <div className="product-page__info-includes__items">
            {product?.includes.map((item) => {
              return <InTheBox key={item.item} {...item} />;
            })}
          </div>
        </div>
      </div>
      <div className="product-page__gallery">
        <div className="product-page__gallery-small">
          <img
            className="product-page__gallery-small__img"
            src={product?.gallery.first.desktop}
            alt=""
          />
          <img
            className="product-page__gallery-small__img"
            src={product?.gallery.second.desktop}
            alt=""
          />
        </div>
        <img
          className="product-page__gallery-big__img"
          src={product?.gallery.third.desktop}
          alt=""
        />
      </div>
      <SmallNav />
      <BestGear />
    </div>
  );
}

export default ProductPage;
