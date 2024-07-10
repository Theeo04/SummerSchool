import { useState } from "react";

const ChangeColorButtonSecond = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [colorIndex, setColorIndex] = useState(0);

  const handleButtonClick = () => {
    colorIndex === colors.length - 1
      ? setColorIndex(0)
      : setColorIndex(colorIndex + 1);
  };

  return (
    <div>
      <p>Exercitiul 2</p>
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

export default ChangeColorButtonSecond;
