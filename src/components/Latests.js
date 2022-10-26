import axios from "axios";
import React, { useEffect, useState } from "react";
import "./moviecards.css";

export default function Latests() {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=2e0a9e72249514e45f19f77ee9930761&language=en-US&page=1`
      )
      .then((res) => setLatestData(res.data.results));
  }, []);

  return (
    <div>
      <div className="row-container">
        <h2 className="category-title">Les séries Tv populaires</h2>
        <div className="row">
          <div className="movie-container">
            {latestData.map((latest) => {
              return (
                <div className="movie-card">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      latest.poster_path
                    }
                    alt="img film"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
