import React from "react";
import "./moviecards.css";
import MovieCard from "./MovieCard";

export default function Trends({ movie }) {
  return (
    <div className="row-container">
      <h2 className="category-title">Tendances cette semaine</h2>
      <div className="row">
        <div className="movie-container">
          {movie.map((film, index) => {
            return <MovieCard key={index} film={film} />
          })}
        </div>
      </div>
    </div>
  );
}
