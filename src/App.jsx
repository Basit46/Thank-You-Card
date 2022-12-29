import React from "react";
import "./App.css";
import revivar from "./images/revivar-logo.jpg";
import mylogo from "./images/my-logo.png";
import { FaTimes } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NameInput from "./pages/NameInput";
import Result from "./pages/Result";
import { useUserContext } from "./context/UserContext";

function App() {
  const { selectedImage, userName } = useUserContext();

  return (
    <div className="app">
      {/* Cover page that slides up 2s after page load  */}
      <div className="cover">
        <img className="revivar-logo" src={revivar} alt="revivar logo" />
        <FaTimes className="times-svg" />
        <img className="basit-logo" src={mylogo} alt="my logo" />
      </div>

      {/* The main page that contains all page */}
      <div className="main">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* This is the route to input page, it will redirect back to homepage if an image hasn't be selcted.*/}
          <Route
            path="/input"
            element={selectedImage ? <NameInput /> : <Home />}
          />

          {/* This is the route to result page, it will redirect back to homepage if username is empty.*/}
          <Route path="/result" element={userName ? <Result /> : <Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
