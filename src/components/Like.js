import React, { useState } from "react";
import { useEffect } from "react";
import "../pages/findFav.css";
import useLocalStorage from "./useLocalStorage";

export default function Like({ film }) {

  const [storageItem, setStorageItem] = useLocalStorage("favourites", []);

  const isFavourited = storageItem.includes(film.id);

  const handleToggleFavourite = () => {
    const newStorageItem = isFavourited
      ? storageItem.filter((savedId) => savedId !== film.id)
      : [...storageItem, film.id];

      setStorageItem(newStorageItem);
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
