import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./findFav.css";
import Like from "../components/Like";

export default function Find() {
  const [objData, setObjData] = useState([]);
  const [searchData, setSearchData] = useState("interstellar");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2e0a9e72249514e45f19f77ee9930761&language=fr-FR&query=${searchData}`
      )
      .then((res) => setObjData((res.data.results)));
  }, [searchData]);

  const message = useRef(null);

  return (
    <div>
      <Navbar />
      <div className="message" ref={message}></div>
      <div className="top-box">
        <h1 className="top-title">Rechercher votre film</h1>
        <input
          onKeyDown={(e) => {e.key === "Enter" && setSearchData(e.target.value)}}
          type="search"
          placeholder="ex. Interstellar"
        />
      </div>
      <div className="grid-container">
        {objData.length > 0 ?
        (
        objData.slice(0, 5).map((film, index) => {
          return (
            <div className="card" key={index}>
              <h1>{film.original_title}</h1>
              <img
                src={
                  film.poster_path
                    ? "https://image.tmdb.org/t/p/original/" + film.poster_path
                    : "./imgs/No data-amico.png"
                }
                alt={film.original_title}
              />
              <p>Date de sortie : {film.release_date.split('-').reverse().join('/')}</p>
              {film.overview && <small>Résumé : {film.overview}</small>}
              <span style={{ color: film.vote_average > 5 ? "green" : "red" }}>
                Popularité : {film.vote_average.toFixed(1)}/10
              </span>
              <Like film={film} message={message} />
            </div>
          );
        })
        ) : (
          <p>Nous n'avons pas trouvés de films qui correspondent à votre recherche. Veuillez réessayer.</p>
        )
        
        }
      </div>
      <Footer />
    </div>
  );
}
