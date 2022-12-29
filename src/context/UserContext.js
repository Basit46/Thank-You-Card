import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  //This handles the fetched data returned from the api
  const [fetchedImages, setFetchedImages] = useState([]);

  //This handles the image that the user selected
  const [selectedImage, setSelectedImage] = useState("");

  //This handles the name of the user
  const [userName, setUserName] = useState("");

  //I used this to call the api, It returns exactly 4 random values because of the parameter I added "count=4"
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=V3eiqW8uga8NZnNbgwsGR84cVH5SjTQfQa6UqeRgZRY&count=4"
      )
      .then((res) => setFetchedImages(res.data));
  }, []);

  //This action runs when user selects an image
  const addImgSrc = (src) => {
    setSelectedImage(src);
  };

  //This action runs when user enter their name
  const addUserName = (name) => {
    setUserName(name);
  };

  return (
    <userContext.Provider
      value={{
        fetchedImages,
        setFetchedImages,
        selectedImage,
        addImgSrc,
        userName,
        addUserName,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  return useContext(userContext);
};
