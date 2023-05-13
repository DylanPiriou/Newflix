import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const backgroundColor = scrollPos > 100 ? "black" : "transparent";

  return (
    <div className="navbar" style={{backgroundColor}}>
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
