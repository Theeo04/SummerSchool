import { useState } from "react";

interface LocationData {
  country: string;
  regionName: string;
  city: string;
  isp: string;
  query: string;
}

const LocationButton = () => {
  const [location, setLocation] = useState<LocationData | null>(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/ip");
      const data: LocationData = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div>
      <p>Exercitiul 4</p>
      <button onClick={handleButtonClick}>Afișează locația</button>

      {location && (
        <div>
          <p>
            <>Țara:</> {location.country}
          </p>
          <p>
            <>Regiune:</> {location.regionName}
          </p>
          <p>
            <>Oraș:</> {location.city}
          </p>
          <p>
            <>ISP:</> {location.isp}
          </p>
          <p>
            <>IP:</> {location.query}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationButton;
