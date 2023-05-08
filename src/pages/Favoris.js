import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./findFav.css";
import { Link } from "react-router-dom";

export default function Favoris() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.favourites
      ? JSON.parse(window.localStorage.favourites)
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=2e0a9e72249514e45f19f77ee9930761`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  const handleDelete = () => {
    window.localStorage.clear();
    setListData([]);
  }

  return (
    <div>
      <Navbar />
      <div className="top-box">
        <h1 className="top-title">Mes favoris</h1>
        <p className="delete-fav" onClick={() => handleDelete()}><i class="fa-solid fa-trash"></i>Supprimer tous les favoris</p>
      </div>
      {listData.length >= 1 ? (
        <div className="grid-container">
          {listData.map((film, index) => {
            return (
              <div className="card">
                <Link to={`/${film.id}`} state={{ film }} key={index}>
                  <h1>{film.original_title}</h1>
                  <img
                    src={
                      film.poster_path
                        ? "https://image.tmdb.org/t/p/original/" +
                          film.poster_path
                        : "./imgs/No data-amico.png"
                    }
                    alt="img film"
                  />
                  <p>Date de sortie : {film.release_date}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid-container">
          <h2>Pas de favoris pour le moment.</h2>
        </div>
      )}
      <Footer />
    </div>
  );
}
