import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Landing from "./Router/Landing";
import Card from "./Router/Card";

const AppRouter = () => {
  const [words, setWords] = useState();
  const [wordsLength, setWordsLength] = useState();
  const [item, setItem] = useState(20);

  axios
    .get(process.env.REACT_APP_NOTION)
    .then(res => {
      //console.log(res.data);

      let w = [];
      res.data.forEach(i => {
        w.push([i.영어, i.한국어]);
      });
      setWords(w);
      setWordsLength(w.length);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Landing wordsLength={wordsLength} item={item} setItem={setItem} />
          }
        />
        <Route
          path="/card"
          element={<Card words={words} item={item} wordsLength={wordsLength} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
