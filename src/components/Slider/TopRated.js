import React, { useEffect, useState } from "react";
import "./Slider.scss";
import MovieCard from "../MovieCard/MovieCard";
import { getTopRatedMovies } from "../../utils/Api";

export default function TopRated() {
  const [topRatedData, setTopRatedData] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((data) => setTopRatedData(data.results));
  }, []);

  return (
    <div>
      <div className="category-container">
        <h2 className="category-title">Les mieux notés</h2>
        <div className="row">
          <div className="movie-container">
            {topRatedData.map((film, index) => {
              return <MovieCard key={index} film={film} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
