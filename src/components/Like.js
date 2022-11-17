import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "../pages/findFav.css";

export default function Like({ film }) {
  const [storageItem, setStorageItem] = useState(
    () => {
      const ls = localStorage.getItem("favourites");
      if (ls) return JSON.parse(ls);
      else return [];
    }

    // JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const isFavourited = storageItem.includes(film.id);

  const handleToggleFavourite = () => {
    if (!isFavourited) {
      const newStorageItem = (prev) => [...prev, film.id];
      window.location.reload(false);
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter(
        (savedId) => savedId !== film.id
      );
      window.location.reload(false);
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem));
    }
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(storageItem));
  }, [storageItem]);
  // const [pushedData, setPushedData] = useState(false);

  // //Logique ajout/supp de l'id des films dans le localStorage

  // const handleLike = (event) => {
  //   let storedData = window.localStorage.items
  //     ? window.localStorage.items.split(",")
  //     : [];

  //   if (!storedData.includes(event.toString())) {
  //     storedData.unshift(event);
  //     window.localStorage.items = storedData;
  //     setPushedData(true);
  //     localStorage.setItem("liked", true);
  //   } else if (storedData.includes(event.toString())) {
  //     let newData = storedData.filter((id) => id !== event);
  //     window.localStorage.items = newData;
  //     setPushedData(false);
  //     localStorage.setItem("liked", false);
  //   }
  // };

  // const item = useRef();
  // const like = useRef();

  // useEffect(() => {
  //   window.localStorage.setItem("liked", true);
  // }, [pushedData]);

  // useEffect(() => {
  //   window.localStorage.getItem("liked")
  //     ? // [window.localStorage["items"]].includes(item.current.id)
  //       setPushedData(true)
  //     : setPushedData(false);
  // }, []);

  // useEffect(() => {
  //   pushedData && !localStorage["items"] !== []
  //     ? setPushedData(true)
  //     : setPushedData(false);
  // }, []);

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
