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
        <NavLink to="/favoris">Favoris</NavLink>
        <NavLink to="/rechercher">
          <i class="fa-solid fa-magnifying-glass"></i>
        </NavLink>
      </nav>
    </div>
  );
}
