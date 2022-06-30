import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Details from "./components/Details";
import React, { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // const [modeType, setModeType] = useState("light");
  const [mode, setMode] = useState(false);

  return (
    <div className={mode === false ? "App light" : "App dark"}>
      <div onClick={() => setMode(!mode)} className="changeMode">
        {mode === false ? (
          <MdOutlineDarkMode />
        ) : (
          <MdOutlineLightMode className="icon" />
        )}
      </div>

      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
