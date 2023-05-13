import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Slider.scss";
import { getTvShows } from "../../utils/Api";

export default function TvShow() {
  const [tvShowData, setTvShowData] = useState([]);

  useEffect(() => {
    getTvShows().then((data) => setTvShowData(data.results));
  }, []);

  return (
    <div>
      <div className="category-container">
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
