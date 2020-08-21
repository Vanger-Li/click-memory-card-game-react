import React from "react";

import "./style.css";

const Card = ({
  handleClick,
  id,
  type,
  flipped,
  solved,
  height,
  width,
  disabled
}) => {
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
          src={flipped || solved ? `/img/${type}.png` : "/img/back.png"}
          alt={type}
        />
      </div>
    </div>
  );
};
