import React from 'react';
import { Link } from "react-router-dom";
import Like from "../Like/Like";
import "./FavCard.scss";

export default function FavCard({ film, message }) {
    return (
        <div className="fav-card">
            <Link to={`/${film.id}`} state={{ film }}>
                <h1>{film.original_title}</h1>
                <img
                    src={
                        film.poster_path
                            ? "https://image.tmdb.org/t/p/original/" + film.poster_path
                            : "./imgs/No data-amico.png"
                    }
                    alt={film.original_title}
                />
                <p>Date de sortie : {film.release_date.split('-').reverse().join('/')}</p>
                <span style={{ color: film.vote_average > 5 ? "green" : "red" }}>
                    Popularité : {film.vote_average.toFixed(1)}/10
                </span>
            </Link>
            <Like film={film} message={message} />
        </div>
    )
}
