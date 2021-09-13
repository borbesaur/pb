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
import carturning1 from '../../car-images/carturning1.png';
import carturning2 from '../../car-images/carturning2.png';

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
    if (position <= 700) {
      if(right != 0) setRight(0);
      go = true;
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

      if(rightValue > 75 && rightValue < 82 && position < 1330){
        img = carturning1;
        width = 200;
        const q = position - 1340;
        topValue = (q / 9)+3;
      }
      

      if (position >= 1270 && position <= 1340) {
        img = carFront;
        const converted = position - 1340;
        const divisor = ((1400 - position)/20)+3;
        width = position / divisor;
        topValue = (converted / 4)+15;
        if (topValue > 8) topValue = 8;
        rightValue = 85;
      }

      if(position > 1340 && position < 1372){
        width = 300;
        img = carturning2;
        rightValue = (1660 - position)/4
        topValue = (position - 1250)/10;
      }

      if (position >= 1372) {
        topValue = 12;
        let steps = Math.floor(right % 4);
        img = rightImages[steps]; 
        width = 500;
        const diff = position - 1372;
        const factor = diff / 7;
        if (position < 1600) {
          setVisibility("visible");
          rightValue = 85 - factor - 20;
        } else {
          setVisibility("hidden");
        }
      } 
      setCurrentImage(img);
      setTop(topValue);
      setRight(rightValue);
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
    [right]
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
          zIndex: -5
        }}
      />
    </div>
  );
};

export default Animation;
