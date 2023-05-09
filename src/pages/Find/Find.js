import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Find.scss";
import FavCard from "../../components/FavCard/FavCard";

export default function Find() {
  const [objData, setObjData] = useState([]);
  const [searchData, setSearchData] = useState("Interstellar");
  const [genreId, setGenreId] = useState(null);
  const [isGenreSelected, setIsGenreSelected] = useState(false);

  // Affichage des résultats
  useEffect(() => {
    if (genreId) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=2e0a9e72249514e45f19f77ee9930761&with_genres=${genreId}`
        )
        .then((res) => {
          setObjData(res.data.results);
          setIsGenreSelected(true);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=2e0a9e72249514e45f19f77ee9930761&language=fr-FR&query=${searchData}`
        )
        .then((res) => {
          setObjData(res.data.results);
          setIsGenreSelected(false);
        });
    }
  }, [genreId, searchData]);

  // Récpérer toutes les trends dans la modale
  const [trendData, setTrendData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=2e0a9e72249514e45f19f77ee9930761`
      )
      .then((res) => setTrendData(res.data.results));
  }, []);

  const message = useRef(null);
  const searchBox = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = (e) => {
    setIsFocused(true);
  }

  // Récupérer tous les genres dans la modale
  const [genresData, setGenresData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-FR`
      )
      .then((res) => setGenresData(res.data.genres));
  }, [])

  // Gestion de la fermeture de la modale
  useEffect(() => {
    const handleBlur = (e) => {
      if (searchBox.current && !searchBox.current.contains(e.target) && !e.target.matches('input[type="search"]')) {
        setIsFocused(false);
      }
    }

    document.addEventListener("click", handleBlur);

    return () => {
      document.removeEventListener("click", handleBlur);
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className="message" ref={message}></div>
      <div className="top-box">
        <h1 className="top-title">Rechercher votre film</h1>

        <div className="input-wrapper">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            onKeyDown={(e) => { e.key === "Enter" && setSearchData(e.target.value); setGenreId(null); setIsFocused(false) }}
            onFocus={(e) => handleFocus(e)}
            type="search"
            placeholder={searchData}
          />
          {isFocused &&
            <div className="data-box" ref={searchBox}>
              <div className="trend-wrapper">
                <h3>Tendances en ce moment</h3>
                <ul>
                  {trendData.slice(0, 10).map((film, index) => {
                    return <li key={index} onClick={(e) => { setSearchData(e.target.textContent); setGenreId(null); setIsFocused(false) }}>{film.title}</li>
                  })}
                </ul>
              </div>
              <div className="genres-wrapper">
                <h3>Chercher par genres</h3>
                <ul>
                  {genresData.map((film, index) => {
                    return <button key={index} id={film.id} onClick={(e) => { setGenreId(e.target.id); setIsFocused(false) }}>{film.name}</button>
                  })}
                </ul>
              </div>
            </div>
          }
        </div>

      </div>
      <div className="grid-container">
        {isGenreSelected ? (
          objData.length > 0 ? (
            objData.slice(0, 10).map((film, index) => {
              return <FavCard key={index} film={film} message={message} />;
            })
          ) : (
            <p>Aucun résultat trouvé pour ce genre.</p>
          )
        ) : objData.length > 0 ? (
          objData.slice(0, 10).map((film, index) => {
            return <FavCard key={index} film={film} message={message} />;
          })
        ) : (
          <p>Aucuns films trouvés. Veuillez réessayer.</p>
        )
        }
      </div>
      <Footer />
    </div>
  );
}
