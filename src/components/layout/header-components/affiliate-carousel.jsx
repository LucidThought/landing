import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./affiliate-carousel.scss";

const AffiliateCarousel = () => {
  const affiliates = [
    { key: "thumzap", src: "/header/affiliate/thumzap.png" },
    { key: "gallivnt", src: "/header/affiliate/gallivnt.png" },
    { key: "100clouds", src: "/header/affiliate/100clouds.png" },
  ];
  const [currentHead, setCurrentHead] = useState(0);

  const buildCarousel = () => {
    const displayThese = [];
    for (let i = 0; i < affiliates.length; i++) {
      if (i + currentHead >= affiliates.length)
        displayThese.push(affiliates[i + currentHead - affiliates.length]);
      else displayThese.push(affiliates[i + currentHead]);
    }
    const carouselItems = displayThese.map((affiliate) => (
      <div className="affiliate-item" key={affiliate.key}>
        <img src={affiliate.src} alt="Affiliate" />
      </div>
    ));

    return (
      <div className="affiliate-carousel">
        {carouselItems}
        <div className="affiliate-controls">
          <Button
            variant="link"
            className="affiliate-controls-button"
            onClick={carouselLeft}
          >
            {"<"}
          </Button>
          <div className="affiliate-controls-separator">|</div>
          <Button
            variant="link"
            className="affiliate-controls-button"
            onClick={carouselRight}
          >
            {">"}
          </Button>
        </div>
      </div>
    );
  };

  const carouselLeft = () => {
    if (currentHead - 1 < 0) setCurrentHead(affiliates.length - 1);
    else setCurrentHead(currentHead - 1);
  };

  const carouselRight = () => {
    if (currentHead + 1 > affiliates.length - 1) setCurrentHead(0);
    else setCurrentHead(currentHead + 1);
  };

  return buildCarousel();
};

export default AffiliateCarousel;
