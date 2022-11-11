import axios from "axios";
import React, { useEffect, useState } from "react";

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
            {tvShowData.map((show) => {
              return (
                <div className="movie-card">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" + show.poster_path
                    }
                    alt="img film"
                  />
                  <div className="watch">
                    <p>
                      <i class="fa-regular fa-circle-play"></i>
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
