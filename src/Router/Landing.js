import React from "react";
import { Link } from "react-router-dom";

const Landing = ({ wordsLength, item, setItem }) => {
  const inputSystem = event => {
    const {
      target: { value },
    } = event;
    if (value < 0 || value > wordsLength) {
    } else setItem(value);
  };

  return (
    <div className="landing">
      <div>
        <div></div>
        <input onChange={inputSystem} value={item} type="number"></input>
        <div>{wordsLength}</div>
      </div>
      <Link to="/card">시작하기</Link>
    </div>
  );
};

export default Landing;
