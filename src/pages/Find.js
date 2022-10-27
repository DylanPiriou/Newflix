import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./find.css";

export default function Find() {
  const [objData, setObjData] = useState([]);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2e0a9e72249514e45f19f77ee9930761&language=fr-FR&query=${searchData}`
      )
      .then((res) => setObjData(res.data.results));
  }, [searchData]);

  return (
    <div>
      <Navbar />
      <div className="top-box">
        <h1 className="find-title">Faites votre recherche</h1>
        <input
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="ex: Interstellar, Fury..."
        />
      </div>
      <div className="grid-container">
        {objData.map((film) => {
          return (
            <div className="card">
              <h1>{film.original_title}</h1>
              <img
                src={"https://image.tmdb.org/t/p/original/" + film.poster_path}
                alt="img film"
              />
              <p>Date de sortie : {film.release_date}</p>
              {film.overview && <small>Résumé : {film.overview}</small>}
              <span style={{ color: film.vote_average > 5 ? "green" : "red" }}>
                Popularité : {film.vote_average}
              </span>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
