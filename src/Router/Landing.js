import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = ({ wordsLength, item, setItem }) => {
  const inputSystem = event => {
    const {
      target: { value },
    } = event;
    if (value < 0 || value > wordsLength) {
    } else setItem(value);
  };

  useEffect(() => {
    document.querySelector(".chartPercent").style.transform = `rotate(${
      (180 * item) / wordsLength
    }deg)`;
  }, [item]);

  return (
    <div className="landing">
      <div className="chartBox">
        <ul className="chart-skills">
          <li className="chartPercent"></li>
        </ul>
        <input
          onChange={inputSystem}
          value={item}
          type="text"
          inputMode="numeric"
        ></input>
        <div>/ {wordsLength}</div>
      </div>
      <Link to="/card" className="startButton">
        시작하기
      </Link>
    </div>
  );
};

export default Landing;
