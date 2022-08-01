import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ words, item, wordsLength }) => {
  // 현 위치, 카드 상태, 랜덤 순서화 진행, 단어 목록, 중복 확인용 숫자 배열
  const [pos, setPos] = useState(1);
  const [flip, setFlip] = useState(false);
  const [checker, setChecker] = useState(false);
  const [wordsList, setWordsList] = useState([["a", "b"]]);
  const [usedNums, setUsedNums] = useState([]);

  const wording = () => {
    let wordsArray = [];
    for (let i = 0; i < item; i++) {
      wordsArray.push([words[usedNums[i]][0], words[usedNums[i]][1]]);
    }
    setWordsList(wordsArray);
    setChecker(true);
    setFlip(false);
    setPos(1);
  };

  const numbering = () => {
    let numberList = [];
    while (numberList.length < item) {
      let num = Math.floor(Math.random() * wordsLength);
      if (num === item) num = num - 1;
      if (!numberList.includes(num)) {
        numberList.push(num);
      }
    }
    setUsedNums(numberList);
  };

  useEffect(() => {
    numbering();
  }, []);

  useEffect(() => {
    if (usedNums.length >= item) wording();
  }, [usedNums]);

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
          {checker ? wordsList[pos - 1][0] : "frondCard"}
        </div>
        <div className="wordCard" onClick={cardFlip}>
          {checker ? wordsList[pos - 1][1] : "backCard"}
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
