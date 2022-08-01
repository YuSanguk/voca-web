import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Landing from "./Router/Landing";
import Card from "./Router/Card";

const AppRouter = () => {
  const [words, setWords] = useState();
  const [wordsLength, setWordsLength] = useState();
  const [item, setItem] = useState(0);

  axios
    .get(process.env.REACT_APP_NOTION)
    .then(res => {
      let w = [];
      res.data.forEach(i => {
        w.push([i.영어, i.한국어]);
      });
      setWords(w);
      setWordsLength(w.length);
    })
    .catch(err => {
      console.log(process.env.REACT_APP_NOTION);
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
