import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  let film = movie;
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.location.pathname == "/" ? setShowBtn(true) : setShowBtn(false);
  }, [window.location.pathname])
  return (
    <div className="main-header">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
        alt="img film"
      />
      <div className="black-filter"></div>
      <div className="main-titles">
        <h1>{movie.title ? movie.title : movie.name}</h1>
        {showBtn && <Link to={`/film/${movie.id}`} state={{ film }}><button><i class="fa-sharp fa-solid fa-circle-play"></i>Regarder maintenant</button></Link>}
        
      </div>
    </div>
  );
}
