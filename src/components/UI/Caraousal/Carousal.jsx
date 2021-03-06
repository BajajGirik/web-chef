import React, { useEffect, useState } from "react";

function Carousal({ classname, imgArray, children }) {
  const [displayImgIndex, setDisplayImgIndex] = useState(0);

  useEffect(() => {
    const updateDisplayImage = () => {
      if (imgArray.length === 0) return;

      const img = new Image();
      img.src = imgArray[(displayImgIndex + 1) % imgArray.length];
      img.onload = () =>
        setDisplayImgIndex((displayImgIndex + 1) % imgArray.length);
    };

    const clearTimeOut = setTimeout(updateDisplayImage, 5000);

    return clearTimeOut;
  }, [displayImgIndex, imgArray]);

  return (
    <>
      {imgArray.length && (
        <div
          className={classname + " carousal_animation"}
          style={{ backgroundImage: `url(${imgArray[displayImgIndex]})` }}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Carousal;
