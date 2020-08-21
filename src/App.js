import React, { useState } from "react";
import Card from "./components/card";
import "./styles.css";

export default function App() {
  const [flipped, setFlipped] = useState([]);

  const handleClick = (id) => setFlipped(id);

  return (
    <div className="App">
      <h1>Click Memory Game</h1>
      <h2>Can you remember where the cards are?</h2>
      <Card
        id={1}
        height={100}
        width={100}
        back={"/images/react-backside.png"}
        front={`/images/${type}.png`}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}
