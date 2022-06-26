import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext/AppContextProvider";

import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import Product from "../../components/Product/Product";
import SmallNav from "../../components/SmallNav/SmallNav";
import BestGear from "../../components/BestGear/BestGear";

import "./SpeakersPage.scss";

function SpeakersPage() {
  const { speakers } = useContext(AppContext);

  const renderAllSpeakers = () => {
    return speakers.map((speaker) => {
      return (
        <Product
          key={speaker.id}
          {...speaker}
          btnText="SEE PRODUCT"
          navigateTo={`/product/${speaker.id}`}
        />
      );
    });
  };

  return (
    <div className="speakers">
      <CategoryHeader title="SPEAKERS" />
      <div className="category-products">{renderAllSpeakers()}</div>
      <SmallNav />
      <BestGear />
    </div>
  );
}

export default SpeakersPage;
