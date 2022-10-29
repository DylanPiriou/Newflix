import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "../pages/findFav.css";

export default function Like({ film }) {
  const [pushedData, setPushedData] = useState(false);

  //Logique ajout/supp de l'id des films dans le localStorage
  const handleLike = (event) => {
    let storedData = window.localStorage.items
      ? window.localStorage.items.split(",")
      : [];

    if (!storedData.includes(event.toString())) {
      storedData.unshift(event);
      window.localStorage.items = storedData;
      setPushedData(true);
    } else if (storedData.includes(event.toString())) {
      let newData = storedData.filter((id) => id !== event);
      window.localStorage.items = newData;
      setPushedData(false);
    }
  };

  const item = useRef();

  useEffect(() => {
    pushedData && localStorage["items"].includes(item.current.id)
      ? setPushedData(true)
      : setPushedData(false);
  }, [pushedData]);

  return (
    <div
      ref={item}
      onClick={(e) => handleLike(e.currentTarget.id)}
      id={film.id}
      className="heart"
    >
      <i className={pushedData ? "fa-solid fa-heart" : "fa-regular fa-heart"} />
    </div>
  );
}
