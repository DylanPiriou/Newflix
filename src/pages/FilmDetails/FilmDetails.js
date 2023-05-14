import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import YouTube from "react-youtube";
import "./FilmDetails.scss";
import CardHeader from "../../components/Header/Header";
import Navbar from '../../components/Navbar/Navbar';
import { getYtSearch, searchMovies } from '../../utils/Api';
import NotFound from '../NotFound/NotFound';

export default function Film() {
  const location = useLocation();
  const { film } = location.state ?? {};
  console.log(film);
  if (!film) {
    return <NotFound />;
  }

  const name = location.pathname;
  if(name === `/film/${film.id}`){
    document.title = `${film.title ? film.title : film.name} — Newflix`
  } 

  const opts = {
    height: '490',
    width: '840',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const filmName = `trailer français ${film.title ? film.title : film.name}`;
  console.log(filmName)

  const [id, setId] = useState("");

  useEffect(() => {
    getYtSearch(filmName).then(data => {
      if (data.items && data.items.length > 0) {
        setId(data.items[0].id);
      }
    });
  }, []);

  return (
      <div className="film">
        <Navbar />
        <CardHeader movie={film} />
        <div className="overview-wrapper">
          <YouTube className="youtube" videoId={id} opts={opts} onReady={onReady} />
          <div className="data-container">
            <h3>Date de sortie</h3>
            <span>{film.release_date ? film.release_date.split("-").reverse().join("/") : film.first_air_date.split("-").reverse().join("/")}</span>
            <h3>Note globale</h3>
            <span>{film.vote_average.toFixed(1)}</span>
            <h3>Résumé</h3>
            <p className="overview">{film.overview ? film.overview : "Résumé prochainement disponible."}</p>
          </div>
        </div>
      </div>
  )
}
