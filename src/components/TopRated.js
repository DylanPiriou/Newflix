import axios from "axios";
import React, { useEffect, useState } from "react";
import "./moviecards.css";

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
            {topRatedData.map((rated, index) => {
              return (
                <div className="movie-card" key={index}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" + rated.poster_path
                    }
                    alt="img film"
                  />
                  <div className="watch">
                    <p>
                      <i className="fa-regular fa-circle-play"></i>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
