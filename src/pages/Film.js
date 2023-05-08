import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import YouTube from "react-youtube";
import "./Film.css";
import axios from "axios";
import CardHeader from "../components/CardHeader";
import Navbar from '../components/Navbar';

export default function Film() {
  const location = useLocation();
  const { film } = location.state;
  console.log(film)

  const opts = {
    height: '490',
    width: '840',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // Vous pouvez utiliser l'objet event pour contrôler la vidéo
    event.target.pauseVideo();
  };

  const filmName = `trailer français ${film.title}`;
  console.log(filmName)

  const [id, setId] = useState("");

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: { q: filmName },
        headers: {
          'X-RapidAPI-Key': '8380072445mshe04ccea12158b5dp153a56jsn59ea5fb2826d',
          'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setId(response.data.items[0].id);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [])

  return (
    <div className="film">
      <Navbar/>
      <CardHeader movie={film} />
      <div className="overview-wrapper">
        <YouTube className="youtube" videoId={id} opts={opts} onReady={onReady} />
        <div className="data-container">
          <h3>Date de sortie</h3>
          <span>{film.release_date.split("-").reverse().join("/")}</span>
          <h3>Note globale</h3>
          <span>{film.vote_average.toFixed(1)}</span>
          <h3>Résumé</h3>
          <p className="overview">{film.overview}</p>
        </div>
      </div>
    </div>
  )
}
