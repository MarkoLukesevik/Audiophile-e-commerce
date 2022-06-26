import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext/AppContextProvider";

import Banner from "../../components/Banner/Banner";
import SmallNav from "../../components/SmallNav/SmallNav";
import BestGear from "../../components/BestGear/BestGear";
import Product from "../../components/Product/Product";

import "./HomePage.scss";

function HomePage() {
  const { data } = useContext(AppContext);

  const xx99 = data?.find(
    (product) => product.name === "XX99 Mark II Headphones"
  );
  const zx9 = data.find((product) => product.name === "ZX9 Speaker");
  const zx7 = data.find((product) => product.name === "ZX7 Speaker");
  const yx1 = data.find((product) => product.name === "YX1 Wireless Earphones");

  return (
    <div className="home-page">
      <Banner {...xx99} />
      <SmallNav />
      <div className="home-page-container">
        <div className="banner-zx9">
          <img
            className="banner-zx9__img"
            src="./assets/home/desktop/image-speaker-zx9.png"
            alt=""
          />
          <Product
            name="ZX9 SPEAKER"
            description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            btnText="SEE PRODUCT"
            navigateTo={zx9 && `/product/${zx9.id}`}
          />
        </div>

        <div className="banner-zx7">
          <Product
            name="ZX7 SPEAKER"
            btnText="SEE PRODUCT"
            navigateTo={zx7 && `/product/${zx7.id}`}
          />
        </div>

        <div className="banner-yx1">
          <img
            className="banner-yx1__img"
            src="./assets/home/desktop/image-earphones-yx1.jpg"
            alt=""
          />
          <Product
            name="YX1 EARPHONES"
            btnText="SEE PRODUCT"
            navigateTo={yx1 && `/product/${yx1.id}`}
          />
        </div>

        <BestGear />
      </div>
    </div>
  );
}

export default HomePage;
