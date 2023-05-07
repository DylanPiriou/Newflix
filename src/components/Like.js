import React, { useState } from "react";
import { useEffect } from "react";
import "../pages/findFav.css";
import useLocalStorage from "./useLocalStorage";

export default function Like({ film }) {

  const [favouritedIds, setFavouritedIds] = useState([]);
  const [storageItem, setStorageItem] = useLocalStorage("favourites", []);

  useEffect(() => {
    setFavouritedIds(storageItem);
  }, [storageItem]);

  const isFavourited = favouritedIds.includes(film.id);

  const handleToggleFavourite = () => {
    const newFavouritedIds = isFavourited
      ? favouritedIds.filter((savedId) => savedId !== film.id)
      : [...favouritedIds, film.id];

    const existingStorageItem = localStorage.getItem("favourites");
    const existingFavouritedIds = existingStorageItem
      ? JSON.parse(existingStorageItem)
      : [];

    const updatedFavouritedIds = [...existingFavouritedIds, ...newFavouritedIds];
    localStorage.setItem("favourites", JSON.stringify(updatedFavouritedIds));
    setFavouritedIds(newFavouritedIds);
  };
  
    
  return (
    <div
      // ref={item}
      onClick={() => handleToggleFavourite()}
      id={film.id}
      className="heart"
    >
      <i
        // ref={like}
        className={isFavourited ? "fa-solid fa-heart" : "fa-regular fa-heart"}
      />
    </div>
  );
}
