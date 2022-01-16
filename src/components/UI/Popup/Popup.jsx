import React from "react";
import "./Popup.css";

function Popup({ heading, desc, priText, priFn, exitFn }) {
  return (
    <div className="Popup-container flex al-center j-center">
      <div className="flex-c al-center txt-al-center">
        <h2>{heading}</h2>
        <p>{desc}</p>
        {priText && (
          <button className="Popup-btn" onClick={priFn}>
            {priText}
          </button>
        )}
        <button className="Popup-btn secondary" onClick={exitFn}>
          Exit
        </button>
      </div>
    </div>
  );
}

export default Popup;
