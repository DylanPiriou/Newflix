import axios from "axios";
import React, { useEffect, useState } from "react";
import "./moviecards.css";
import MovieCard from "./MovieCard";

export default function TopRated() {
  const [topRatedData, setTopRatedData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-US&page=1`
      )
      .then((res) => setTopRatedData(res.data.results));
  }, []);

  return (
    <div>
      <div className="row-container">
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
