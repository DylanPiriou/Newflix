import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Find.scss";
import FavCard from "../../components/FavCard/FavCard";
import { getAllGenres, getGenreMoviesById, getTrendMovies, searchMovies } from "../../utils/Api";
import SearchModal from "../../components/SearchModal/SearchModal";

export default function Find() {
  const [objData, setObjData] = useState([]);
  const [searchData, setSearchData] = useState("Interstellar");
  const [genreId, setGenreId] = useState(null);
  const [isGenreSelected, setIsGenreSelected] = useState(false);

  // Affichage des résultats
  useEffect(() => {
    if (genreId) {
      setSearchData("");
      getGenreMoviesById(genreId).then(data => {
        setObjData(data.results);
        setIsGenreSelected(false);
      })
    } else {
    searchMovies(searchData).then(data => {
      setObjData(data.results);
      setIsGenreSelected(false);
    })
  }
  }, [genreId, searchData]);

  // Récpérer toutes les trends dans la modale
  const [trendData, setTrendData] = useState([]);
  useEffect(() => {
    getTrendMovies().then(data => setTrendData(data.results));
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
    getAllGenres().then(data => setGenresData(data.genres));
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
            <SearchModal
            searchBox={searchBox}
            trendData={trendData}
            setSearchData={setSearchData}
            setGenreId={setGenreId}
            setIsFocused={setIsFocused}
            genresData={genresData}
            />
          }
        </div>

      </div>
      <div className="grid-container">
        {isGenreSelected ? (
          objData.length > 0 ? (
            objData.slice(0, 8).map((film, index) => {
              return <FavCard key={index} film={film} message={message} />;
            })
          ) : (
            <p>Aucun résultat trouvé pour ce genre.</p>
          )
        ) : objData.length > 0 ? (
          objData.slice(0, 8).map((film, index) => {
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
