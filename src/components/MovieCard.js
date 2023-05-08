import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function MovieCard({ film }) {
    // useEffect(() => {
    //     console.log(film)
    // }, [])
    return (
        <Link to={`/${film.id}`} state={{ film }} className="movie-card">
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
