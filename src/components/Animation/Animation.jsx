import React from "react";
import "./Animation.css";
import { useEffect, useState } from "react";
import carFront from '../../car-images/carFront.png'
import carLeft1 from '../../car-images/carleft1.png';
import carLeft2 from '../../car-images/carleft2.png';
import carLeft3 from '../../car-images/carleft3.png';
import carLeft4 from '../../car-images/carleft4.png';
import carRight1 from '../../car-images/carright1.png';
import carRight2 from '../../car-images/carright2.png';
import carRight3 from '../../car-images/carright3.png';
import carRight4 from '../../car-images/carright4.png';

const Animation = () => {
  const leftImages = [carLeft1, carLeft2, carLeft3, carLeft4];
  const rightImages = [carRight4, carRight3, carRight2, carRight1];
  const [right, setRight] = useState(0);
  const [top, setTop] = useState(-12);
  const [visibility, setVisibility] = useState("visible");
  const [currentImage, setCurrentImage] = useState(carLeft1);
  const [imgWidth, setImgWidth] = useState(250);
  let go = true;

  const handleScroll = (e) => {
    const position = window.scrollY;
    if (position < 700) {
      if(right != 0) setRight(0); go = true;
      return
    };

    const coord = (position - 700) / 7;
    if (go) {
      let img = currentImage;
      let width = 250;
      let topValue = -12;
      let rightValue = coord > 0 ? coord : 0;
      let blah = Math.floor(rightValue % 4);
      img = (leftImages[blah]);
      

      if (rightValue >= 82 && top <= 8) {
        img = carFront;
        const blah = position - 1340;
        const divisor = ((1400 - position)/20)+4;
        width = position / divisor;
        topValue = (blah / 4)+2;
        if (topValue > 8) topValue = 8;
        rightValue = 85;
      }

      if (position >= 1372) {
        let steps = Math.floor(right % 4);
        img = rightImages[steps]; 
        width = 300;
        const diff = position - 1372;
        const factor = diff / 7;
        if (right > 73) {
          rightValue = 85 - factor - 5;
        } else {
          setVisibility("hidden");
        }
      } else {
        setVisibility("visible");
      }

      setTop(topValue);
      setRight(rightValue);
      setCurrentImage(img);
      setImgWidth(width);
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
          width: `${imgWidth}px`,
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
