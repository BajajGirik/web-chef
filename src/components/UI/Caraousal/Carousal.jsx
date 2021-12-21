import React, { useEffect, useState } from "react";

function Carousal({ classname, imgArray, alt }) {
  const [displayImgIndex, setDisplayImgIndex] = useState(0);

  const updateDisplayImage = () => {
    if (imgArray.length === 0) return;
    setDisplayImgIndex((displayImgIndex + 1) % imgArray.length);
  };

  useEffect(() => {
    setTimeout(updateDisplayImage, 5000);
  }, [displayImgIndex]);

  console.log(displayImgIndex);
  return (
    <>
      {imgArray.length && (
        <img className={classname} src={imgArray[displayImgIndex]} alt={alt} />
      )}
    </>
  );
}

export default Carousal;
