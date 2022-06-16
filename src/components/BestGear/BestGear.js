import React from "react";

import "./BestGear.scss";

function BestGear() {
  return (
    <div className="best-gear">
      <div className="best-gear__content">
        <h2>
          Bringing you the <span className="best">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        className="best-gear__img"
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt=""
      ></img>
    </div>
  );
}

export default BestGear;
