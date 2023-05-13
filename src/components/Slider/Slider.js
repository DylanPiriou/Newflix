import React from 'react';
import "./Slider.scss";
import MovieCard from "../MovieCard/MovieCard";

export default function Slider({ data, title }) {
  return (
    <div className="category-container">
      <h2 className="category-title">{title}</h2>
      <div className="row">
        <div className="movie-container">
          {data.map((film, index) => {
            return <MovieCard key={index} film={film} />
          })}
        </div>
      </div>
    </div>
  )
}
