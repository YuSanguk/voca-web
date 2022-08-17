import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BiBorderAll, BiCalendarAlt } from "react-icons/bi";

const Card = ({ words, item, wordsLength }) => {
  // 현 위치, 카드 상태, 랜덤 순서화 진행, 단어 목록, 중복 확인용 숫자 배열
  const [mode, setMode] = useState(0); // 0 : 카드 모드 / 1 : 표 모드
  const [iconState, setIconState] = useState(0); // 0 : 카드 / 1 : 표
  const [pos, setPos] = useState(1);
  const [flip, setFlip] = useState(false);
  const [checker, setChecker] = useState(false);
  const [wordsList, setWordsList] = useState([["a", "b"]]);
  const [usedNums, setUsedNums] = useState([]);
  const [language, setLanguage] = useState(0);

  const languageChange = e => {
    setLanguage(e.target.value);
  };

  const modeChange = () => {
    setMode(!mode);
    setIconState(!iconState);
  };

  const toCard = ele => {
    modeChange();
    setFlip(false);
    let it = 0;
    for (let i = 0; i < wordsLength; i++) {
      if (wordsList[i][0] === ele) {
        it = i + 1;
        break;
      }
    }
    setPos(it);
  };

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
  };

  const goFront = () => {
    if (pos < item) setPos(pos + 1);
  };

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <>
      <div className="modeChanger" onClick={modeChange}>
        {iconState ? <BiBorderAll /> : <BiCalendarAlt />}
      </div>
      {mode ? (
        <div className="table">
          <div className="tableBox">
            {wordsList.map(ele => (
              <div
                key={ele[0]}
                onClick={() => {
                  toCard(ele[0]);
                }}
                className="row"
              >
                <span className={`${language === "2" ? "invisible" : ""}`}>
                  {ele[0]}
                </span>
                <span className={`${language === "1" ? "invisible" : ""}`}>
                  {ele[1]}
                </span>
              </div>
            ))}
          </div>
          <select
            onChange={e => {
              languageChange(e);
            }}
            className="language"
          >
            <option value="0">EN / KOR</option>
            <option value="1">EN</option>
            <option value="2">KOR</option>
          </select>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Card;
