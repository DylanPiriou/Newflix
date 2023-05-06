import React from "react";
import "./moviecards.css";

export default function Trends({ movie }) {
  return (
    <div className="row-container">
      <h2 className="category-title">Tendances cette semaine</h2>
      <div className="row">
        <div className="movie-container">
          {movie.map((trend, index) => {
            return (
              <div className="movie-card" key={index}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + trend.poster_path
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
  );
}
