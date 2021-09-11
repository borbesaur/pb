import React from "react";
import "./Animation.css";
import { useEffect, useState, useRef } from "react";

const Animation = () => {
  const mid = useRef(null)
  const executeScroll = () => mid.current && mid.current.scrollIntoView()    
  
  const [right, setRight] = useState(0);
  const [top, setTop] = useState(0);
  const [oldPosition, setOldPosition] = useState(0);
  let go = true;
  const handleScroll = (e) => {
    const position = window.scrollY;
    if (position < 700) {
        if(right !== 0) setRight(0);
      return;
    } else {
      if (go) {
        const goingDown = position > oldPosition;
        setOldPosition(position);
        console.log(goingDown);
        go = false;
        if(goingDown) setRight(right +1.1);
        if(!goingDown && right > -1) setRight(right - 1.1);
        return;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(()=>{
    go = true;
  }, [right])

  return (
    <div className="animation-bg">
      <img
        src="images/stv.png"
        alt=""
        style={{
          width: "200px",
          position: "absolute",
          right: `${right}vw`,
          top: `${top}vh`,
          visibility: "visible",
        }}
      />
    </div>
  );
};

export default Animation;
