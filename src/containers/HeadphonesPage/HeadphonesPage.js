import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext/AppContextProvider";

import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import Product from "../../components/Product/Product";
import SmallNav from "../../components/SmallNav/SmallNav";
import BestGear from "../../components/BestGear/BestGear";

import "./HeadphonesPage.scss";

function HeadphonesPage() {
  const { headphones } = useContext(AppContext);

  const renderAllHeadphones = () => {
    return headphones.map((headphone) => {
      return (
        <Product
          key={headphone.id}
          {...headphone}
          btnText="SEE PRODUCT"
          navigateTo={`/product/${headphone.id}`}
        />
      );
    });
  };
  return (
    <div className="headphones">
      <CategoryHeader title="HEADPHONES" />
      <div className="category-products">{renderAllHeadphones()}</div>
      <SmallNav />
      <BestGear />
    </div>
  );
}

export default HeadphonesPage;
