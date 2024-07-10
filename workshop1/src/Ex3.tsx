import { useState } from "react";

const ChangeColorButtonThird = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [colorIndex, setColorIndex] = useState(0);

  const handleButtonClick = () => {
    //functie random
    const randomIndex = Math.floor(Math.random() * colors.length);

    setColorIndex(randomIndex);
  };

  return (
    <div>
       <p>Exercitiul 3</p>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: colors[colorIndex],
          color: "white",
        }}
      >
        Schimbă culoarea
      </button>
    </div>
  );
};

export default ChangeColorButtonThird;
