import React from "react";

import "./style.css";

function Card ({
  handleClick,
  id,
  type,
  flipped,
  height,
  width,
  disabled
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{
        width,
        height
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{
            height,
            width
          }}
          className={flipped ? "front" : "back"}
          src={flipped ? `/images/${type}.png` : "/images/react-backside.png"}
          alt={type}
        />
      </div>
    </div>
  );
}

export default Card;