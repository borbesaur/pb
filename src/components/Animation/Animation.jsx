import React from "react";
import "./Animation.css";
import { useEffect, useState, useRef } from "react";

const Animation = () => {
  const mid = useRef(null)
  const executeScroll = () => mid.current && mid.current.scrollIntoView()    
  
  const [right, setRight] = useState(0);
  const [top, setTop] = useState(-13);
  let go = true;
  const handleScroll = (e) => {
    const position = window.scrollY;
    if (position < 700) return;
    const coord = (position - 700) / 8;
      if (go) {
        const rightValue = coord > 0 ? coord : 1;
        setRight(rightValue);
        go = false;
        return;
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
          top: `${top}vw    `,
          visibility: "visible",
        }}
      />
    </div>
  );
};

export default Animation;
