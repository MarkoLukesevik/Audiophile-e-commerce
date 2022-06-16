import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext/AppContextProvider";

import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import Product from "../../components/Product/Product";
import SmallNav from "../../components/SmallNav/SmallNav";
import BestGear from "../../components/BestGear/BestGear";

import "./Earphones.scss";

function EarphonesPage() {
  const { earphones } = useContext(AppContext);

  const renderAllEarphones = () => {
    return earphones.map((earphone) => {
      return (
        <Product
          key={earphone.id}
          {...earphone}
          btnText="SEE PRODUCT"
          link={`/product/${earphone.id}`}
        />
      );
    });
  };
  return (
    <div className="earphones">
      <CategoryHeader title="EARPHONES" />
      <div className="category-products">{renderAllEarphones()}</div>
      <SmallNav />
      <BestGear />
    </div>
  );
}

export default EarphonesPage;
