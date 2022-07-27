import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ words, item, wordsLength }) => {
  const [pos, setPos] = useState(1);
  const [flip, setFlip] = useState(false);
  const [checker, setChecker] = useState(false);
  const [wordsList, setWordsList] = useState([]);
  const [usedNums, setUsedNums] = useState([]);
  let wordList = [];
  let usedNum = [];

  const numbering = () => {
    let num = -1;

    while (num !== -1 || usedNum.includes(num)) {
      const ran = Math.random() * 100 * wordsLength;
      num = ran % item;
    }

    return num;
  };

  useEffect(() => {
    if (item > 0) {
      for (let i = 0; i < item; i++) {
        const num = numbering();

        usedNum.push(0);
        wordList.push([words[num][0], words[num][1]]);
      }
      setWordsList(wordList);
      setChecker(true);
    }
  }, []);

  const goBack = () => {
    if (pos > 1) setPos(pos - 1);
    setFlip(false);
  };

  const goFront = () => {
    if (pos < item) setPos(pos + 1);
    setFlip(false);
  };

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className="cardBox">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div className="wordCard" onClick={cardFlip}>
          {checker ? wordsList[pos - 1][0] : "121"}
        </div>
        <div className="wordCard" onClick={cardFlip}>
          1
        </div>
      </ReactCardFlip>
      <div className="cardButton">
        <div onClick={goBack}>{"<"}</div>
        <div>
          {pos} / {item}
        </div>
        <div onClick={goFront}>{">"}</div>
      </div>
    </div>
  );
};

export default Card;
