import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Like from "../Like/Like";
import "./FavCard.scss";

export default function FavCard({ film, message }) {

    const [showLike, setShowLike] = useState(false);
    useEffect(() => {
        window.location.pathname === "/favoris" ? setShowLike(false) : setShowLike(true);
    }, [])

    return (
        <div className="fav-card-container">
            <Link className="fav-card" to={`/${film.id}`} state={{ film }}>
                    <img
                        src={
                            film.poster_path
                            ? "https://image.tmdb.org/t/p/original/" + film.poster_path
                            : "./imgs/No data-amico.png"
                        }
                        alt={film.original_title}
                        />
                <div className="overlay">
                    <h1>{film.original_title}</h1>
                    <p>Date de sortie : {film.release_date ? film.release_date.split("-").reverse().join("/") : film.first_air_date?.split("-").reverse().join("/")}</p>
                    <span style={{ color: film.vote_average > 5 ? "green" : "red" }}>
                        Popularité : {film.vote_average.toFixed(1)}/10
                    </span>
                </div>
            </Link>
            {showLike && <Like film={film} message={message} />}
        </div>
    )
}
