import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss"

export default function Navbar() {

  return (
    <div className="navbar">
      <NavLink className="home-title" to="/">
        New<span>flix</span>
      </NavLink>
      <nav>
        <NavLink to="/" className="link">Accueil</NavLink>
        <NavLink to="/favoris" className="link">Favoris</NavLink>
        <NavLink to="/rechercher" className="link">
          <i className="fa-solid fa-magnifying-glass"></i>
        </NavLink>
      </nav>
    </div>
  );
}
