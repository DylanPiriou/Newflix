import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Slider.scss";

export default function TvShow() {
  const [tvShowData, setTvShowData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-US&page=1`
      )
      .then((res) => setTvShowData(res.data.results));
  }, []);

  return (
    <div>
      <div className="row-container">
        <h2 className="category-title">Les séries Tv populaires</h2>
        <div className="row">
          <div className="movie-container">
            {tvShowData.map((film, index) => {
              return <MovieCard key={index} film={film} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
