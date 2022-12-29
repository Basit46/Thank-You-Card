import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { useUserContext } from "../context/UserContext";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import download from "downloadjs";
import { Link } from "react-router-dom";

const Result = () => {
  const imgref = useRef();
  const { selectedImage, userName } = useUserContext();

  //I used htmlToImage will give us the url of the dom content to download
  //I used downloadjs to download the url to the user's device
  const handleClick = () => {
    htmlToImage.toPng(imgref.current).then(function (dataUrl) {
      download(dataUrl, "Thank-you-card.png");
    });
  };

  return (
    <>
      <div className="result">
        <div className="container">
          <div ref={imgref} id="card" className="card">
            <img src={selectedImage} alt="example" />
            <p className="thanks">THANK YOU</p>
            <p className="name">{userName}</p>
          </div>

          <button onClick={handleClick}>
            DOWNLOAD IMAGE <FaDownload />{" "}
          </button>
          <p className="back-link">
            Go back to{" "}
            <Link style={{ color: "red" }} to="/">
              Home Page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Result;
