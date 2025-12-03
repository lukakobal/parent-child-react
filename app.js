import React, { useState } from "react";
import InfoSection from "./InfoSection";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleChildClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="app">
      <h1>React Communication 🔄</h1>
      <p>Total clicks: {clicks}</p>

      <InfoSection onIncrement={handleChildClick} />
    </div>
  );
}
