import React, { useState } from "react";
import { BiBrightnessHalf, BiBrightness } from "react-icons/bi";
import AppRouter from "./Router";
import "./style/style.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeChange = () => {
    if (theme === "light") setTheme("night");
    else setTheme("light");
  };

  return (
    <div className={theme}>
      <div className="themeSelector" onClick={themeChange}>
        {theme === "light" ? <BiBrightness /> : <BiBrightnessHalf />}
      </div>
      <AppRouter />
    </div>
  );
};

export default App;
