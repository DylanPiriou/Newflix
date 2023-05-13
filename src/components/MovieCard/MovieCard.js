import React from 'react';
import { Link } from "react-router-dom";
import "./MovieCard.scss";

export default function MovieCard({ film }) {

    return (
        <Link to={`/film/${film.id}`} state={{ film }} className="movie-card">
            <img
                src={
                    "https://image.tmdb.org/t/p/original/" + film.poster_path
                }
                alt="img film"
            />
            <div className="watch">
                <p>
                    <i className="fa-regular fa-circle-play"></i>
                </p>
            </div>
        </Link>
    )
}
