import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const NameInput = () => {
  const navigate = useNavigate();
  const { addUserName } = useUserContext();

  const [inputedName, setInputedName] = useState("");

  const handleClick = async () => {
    if (inputedName) {
      await addUserName(inputedName);
      navigate("/result");
    } else {
      alert("Pls, Enter your name to proceed");
    }
  };
  return (
    <div className="name-input-page">
      <h1>What Should I call you?</h1>
      <input
        value={inputedName}
        onChange={(e) => setInputedName(e.target.value)}
        type="text"
        placeholder="Basit"
      />
      <button onClick={handleClick}>NEXT</button>
    </div>
  );
};

export default NameInput;
