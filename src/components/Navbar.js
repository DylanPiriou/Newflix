import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [shownav, setShownav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setShownav(!shownav);
      } else {
        setShownav(shownav);
      }
    });
  }, []);

  return (
    <div className={shownav ? "shown" : "navbar"}>
      <p className="home-title">
        <NavLink to="/">
          Movie<span>HUB.</span>
        </NavLink>
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
