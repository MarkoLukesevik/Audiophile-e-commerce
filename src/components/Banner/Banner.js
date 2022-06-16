import React from "react";

import Product from "../Product/Product";

import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__content">
        <Product
          isNew={props.isNew}
          name={props.name}
          description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          btnText="SEE PRODUCT"
          link={`/product/${props.id}`}
        />
      </div>
    </div>
  );
}

export default Banner;
