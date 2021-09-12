import React from "react";
import "./Animation.css";
import { useEffect, useState } from "react";
import carFront from '../../car-images/carFront.png'
import carLeft1 from '../../car-images/carleft1.png';

const Animation = () => {
  const [right, setRight] = useState(0);
  const [top, setTop] = useState(-12);
  const [visibility, setVisibility] = useState("visible");
  let go = true;

  const handleScroll = (e) => {
    const position = window.scrollY;
    if (position < 700) return;

    const coord = (position - 700) / 7;
    if (go) {
      let topValue = -12;
      let rightValue = coord > 0 ? coord : 0;

      if (rightValue >= 85 && top <= 8) {
        console.log(position, rightValue, top);
        const blah = position - 1340;
        topValue = blah / 4;
        if (topValue > 8) topValue = 8;
        rightValue = 85;
      }

      if (position >= 1372) {
        console.log("this is happening", right);
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
        src={carLeft1}
        alt=""
        style={{
          width: "200px",
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
