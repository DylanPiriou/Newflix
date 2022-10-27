import React from "react";
import "../components/moviecards.css";

export default function Cards({ movie }) {
  return (
    <div className="row-container">
      <h2 className="category-title">Tendances cette semaine</h2>
      <div className="row">
        <div className="movie-container">
          {movie.map((trend) => {
            return (
              <div className="movie-card">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + trend.poster_path
                  }
                  alt="img film"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
