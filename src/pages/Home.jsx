import React from "react";
import Image from "../components/Image";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { fetchedImages } = useUserContext();

  return (
    <div className="home">
      <h1>Hello Amigo👋</h1>
      <p>Click on Your Preferred Image</p>
      <div className="img-container">
        {fetchedImages.map((img, index) => (
          <Image key={index} imgSrc={img?.urls?.small} />
        ))}
      </div>
    </div>
  );
};

export default Home;
