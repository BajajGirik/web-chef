import React, { useState } from "react";
import "./Popup.css";

function Popup({ heading, desc }) {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <div className="Popup-container flex al-center j-center">
      <div className="flex-c al-center txt-al-center">
        <h2>This is a sample heading</h2>
        <p>
          This is a very long sample paragraph for reference to the popup that
          is getting created.
        </p>
        <button className="Popup-btn">Got It!</button>
        <button
          className="Popup-btn secondary"
          onClick={() => setShowPopup(false)}
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default Popup;
