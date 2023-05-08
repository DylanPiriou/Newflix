import React, { useState } from "react";
import { useEffect } from "react";
import "../pages/findFav.css";
import useLocalStorage from "./useLocalStorage";

export default function Like({ film }) {

  // Tableau des ids des films fav
  const [favouritedIds, setFavouritedIds] = useState([]);
  // Tableau du localStorage
  const [storageItem, setStorageItem] = useLocalStorage("favourites", []);

  // Mise à jour de la liste des fav à chaque changement dans le localStorage
  useEffect(() => {
    setFavouritedIds(storageItem);
  }, [storageItem]);


  // Vérifie le film est déjà en fav (id déjà présent dans le tableau)
  const isFavourited = favouritedIds.includes(film.id);

  // Fonction pour ajouter/supprimer des films du localStorage au clique
  const handleToggleFavourite = () => {
    let newFavouritedIds;
    
    if (isFavourited) {
      // Supprime l'id (filter)
      newFavouritedIds = favouritedIds.filter((savedId) => savedId !== film.id);
    } else {
      // Ajoute l'id (spread operator)
      newFavouritedIds = [...favouritedIds, film.id];
    }
  
    // Récupération du localStorage
    const existingStorageItem = localStorage.getItem("favourites");
    const existingFavouritedIds = existingStorageItem
      ? JSON.parse(existingStorageItem)
      : [];
  
    let updatedFavouritedIds;
    if (isFavourited) {
      updatedFavouritedIds = existingFavouritedIds.filter(
        (savedId) => savedId !== film.id
      );
    } else {
      updatedFavouritedIds = [...existingFavouritedIds, film.id];
    }
  
    // Stockage de la liste de favoris dans le localStorage
    localStorage.setItem("favourites", JSON.stringify(updatedFavouritedIds));
    // Mise à jour de l'état local
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
