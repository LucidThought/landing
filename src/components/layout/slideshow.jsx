import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./slideshow.scss";

const TopSlideshow = () => {
  const slides = [
    {
      title: "Amplify your blockchain team",
      text: "Mobile, Blockchain, AR/VR development",
      image: "/header/blockchain.png",
    },
    {
      title: "Some other stuff",
      text: "It's still pretty cool",
      image: "/header/blockchain.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [trackSlide, setTrackSlide] = useState(0);

  const controls = () => {
    return (
      <div className="slide-controls">
        <Button
          variant="dark"
          className="btn-circular black"
          onClick={slideBack}
        >
          /\
        </Button>
        <Button
          variant="light"
          className="btn-circular white"
          onClick={slideForward}
        >
          \/
        </Button>
      </div>
    );
  };

  const slideBack = (event) => {
    var newSlide = trackSlide + 1;
    if (newSlide > slides.length - 1) {
      newSlide = 0;
    }
    setCurrentSlide(slides[newSlide]);
    setTrackSlide(newSlide);
  };

  const slideForward = (event) => {
    var newSlide = trackSlide - 1;
    if (newSlide < 0) {
      newSlide = slides.length - 1;
    }
    setCurrentSlide(slides[newSlide]);
    setTrackSlide(newSlide);
  };

  const titles = () => {
    return (
      <div className="title-box">
        <div className="title-title">{currentSlide.title}</div>
        <div className="title-text">{currentSlide.text}</div>
      </div>
    );
  };

  const image = () => {
    const img = currentSlide.image;
    return (
      <div className="header-image-box">
        <img src={img} alt={currentSlide.text} />
      </div>
    );
  };

  return (
    <div className="slide-row">
      {controls()}
      {titles()}
      {image()}
    </div>
  );
};

export default TopSlideshow;
