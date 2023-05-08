import React from 'react'

export default function MovieCard({ film }) {
    return (
        <div className="movie-card">
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
        </div>
    )
}
