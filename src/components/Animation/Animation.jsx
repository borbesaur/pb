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
        let topValue = -12;
        let rightValue = coord > 0 ? coord : 0;


        if (rightValue >= 85 && top <= 8) {
            const blah = position - 1340;
            topValue = blah / 4;
            if (topValue > 8) topValue = 8;
        }


        if(position > 1295 && position < 1372) {
            rightValue = 85;
        }  
        if(position >=1372){
            const diff = (position - 1372);
            const factor = (diff / 7);
            rightValue = 85 - factor + 1;
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
