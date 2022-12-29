import React from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Image = ({ imgSrc, index }) => {
  const navigate = useNavigate();

  const { addImgSrc } = useUserContext();

  const handleClick = async (e) => {
    await addImgSrc(e);
    navigate("/input");
  };

  return (
    <img
      onClick={(e) => handleClick(e.target.src)}
      src={imgSrc}
      alt="example"
    />
  );
};

export default Image;
