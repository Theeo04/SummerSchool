import { useState } from "react";

function ChangeColorButton() {
  const [isGreen, setIsGreen] = useState(false);

  const handleButtonClick = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div>
      <p>Exercitiul 1</p>
      <button
        onClick={handleButtonClick}
        
        style={{
          backgroundColor: isGreen ? "green" : "white",
          color: "black",
        }}
      >
        Schimbă culoarea
      </button>
    </div>
  );
}

export default ChangeColorButton;
