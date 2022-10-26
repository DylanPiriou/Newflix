import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="home-title">
        Movie<span>HUB.</span>
      </p>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/rechercher">Rechercher</NavLink>
        <NavLink to="/favoris">Favoris</NavLink>
      </nav>
    </div>
  );
}
