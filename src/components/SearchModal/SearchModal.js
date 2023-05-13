import React from "react";
import "./SearchModal.scss";

export default function SearchModal({ searchBox, trendData, setSearchData, setGenreId, setIsFocused, genresData }) {
  return (
    <div className="data-box" ref={searchBox}>
      <div className="trend-wrapper">
        <h3>Tendances en ce moment</h3>
        <ul>
          {trendData.slice(0, 8).map((film, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  setSearchData(e.target.textContent);
                  setGenreId(null);
                  setIsFocused(false);
                }}
              >
                {film.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="genres-wrapper">
        <h3>Chercher par genres</h3>
        <ul>
          {genresData.map((film, index) => {
            return (
              <button
                key={index}
                id={film.id}
                onClick={(e) => {
                  setGenreId(e.target.id);
                  setIsFocused(false);
                }}
              >
                {film.name}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
