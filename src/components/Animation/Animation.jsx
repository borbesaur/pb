import React from "react";
import "./Animation.css";
import { useEffect, useState } from "react";

const Animation = () => {
  const [right, setRight] = useState(0);
  const [top, setTop] = useState(-12);
  let go = true;

  const handleScroll = (e) => {
    const position = window.scrollY;
    if (position < 700) return;

    if (position >= 700) {
      const coord = (position - 700) / 7;
      if (go) {
        let topValue = top;
        let rightValue = coord > 0 ? coord : 0;
        if (rightValue > 85 && top < 8) topValue+= 0.5;
        if(position > 1295 && position < 1400) {
            rightValue = 85;
        }  
        if(position >=1400){
            const diff = (position - 1400);
            const factor = diff / 7;
            rightValue = 85 - factor;
        }

        setTop(topValue);
        setRight(rightValue);
        go = false;
        return;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

    useEffect(()=>{
      go = true;
    }, [right], [])

  return (
    <div className="animation-bg">
      <img
        src="images/stv.png"
        alt=""
        style={{
          width: "200px",
          position: "absolute",
          right: `${right}vw`,
          top: `${top}vw    `,
          visibility: "visible",
        }}
      />
    </div>
  );
};

export default Animation;
