import React from "react";
import "./Header.scss";

export default function Card({ movie }) {
  return (
    <div className="main-header">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
        alt="img film"
      />
      <div className="black-filter"></div>
      <div className="main-titles">
        <h1>{movie.title ? movie.title : movie.name}</h1>
      </div>
    </div>
  );
}
