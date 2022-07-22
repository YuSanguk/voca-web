import React, { useState } from "react";

const Card = ({ words, item }) => {
  const [pos, setPos] = useState(1);
  let wordsList = [];

  return (
    <>
      <div className="card"></div>
      <div className="button"></div>
    </>
  );
};

export default Card;
