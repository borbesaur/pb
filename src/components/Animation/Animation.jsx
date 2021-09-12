import React from "react";
import "./Animation.css";
import { useEffect, useState } from "react";
import carFront from '../../car-images/carFront.png'
import carLeft1 from '../../car-images/carleft1.png';
import carLeft2 from '../../car-images/carleft2.png';
import carLeft3 from '../../car-images/carleft3.png';
import carLeft4 from '../../car-images/carleft4.png';
import carLeft5 from '../../car-images/carleft5.png';
import carRight1 from '../../car-images/carright1.png';
import carRight2 from '../../car-images/carright2.png';
import carRight3 from '../../car-images/carright3.png';
import carRight4 from '../../car-images/carright4.png';

const Animation = () => {
  const leftImages = [carLeft1, carLeft2, carLeft3, carLeft4, carLeft5];
  const rightImages = [carRight1, carRight2, carRight3, carRight4];
  const [right, setRight] = useState(0);
  const [top, setTop] = useState(-12);
  const [visibility, setVisibility] = useState("visible");
  let go = true;
  const [currentImage, setCurrentImage] = useState(carLeft1);

  const handleScroll = (e) => {
    const position = window.scrollY;
    if (position < 700) {
      if(right != 0) setRight(0); go = true;
      return
    };

    const coord = (position - 700) / 7;
    if (go) {
      let img;
      let topValue = -12;
      let rightValue = coord > 0 ? coord : 0;

      let blah = Math.floor(rightValue/4);
      while (blah >= leftImages.length) blah -= leftImages.length;
      
      // <= (leftImages.length - 1) ? Math.floor(rightValue/4) : Math.floor(rightValue/4) - leftImages.length;

      img = (leftImages[blah]);

      if (rightValue >= 85 && top <= 8) {
        const blah = position - 1340;
        topValue = blah / 4;
        if (topValue > 8) topValue = 8;
        rightValue = 85;
      }

      if (position >= 1372) {
        const diff = position - 1372;
        const factor = diff / 7;
        if (right > 73) {
          rightValue = 85 - factor + 1;
        } else {
          setVisibility("hidden");
        }
      } else {
        setVisibility("visible");
      }

      setTop(topValue);
      setRight(rightValue);
      setCurrentImage(img);
      go = false;
      return;
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(
    () => {
      go = true;
    },
    [right],
    []
  );

  return (
    <div className="animation-bg">
      <img
        src={currentImage}
        alt=""
        style={{
          width: "250px",
          position: "absolute",
          right: `${right}vw`,
          top: `${top}vw`,
          visibility: visibility,
        }}
      />
    </div>
  );
};

export default Animation;
