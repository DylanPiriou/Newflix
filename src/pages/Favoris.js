import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./findFav.css";

export default function Favoris() {
  return (
    <div>
      <Navbar />
      <div className="top-box">
        <h1 className="top-title">Mes favoris</h1>
      </div>
      <div className="grid-container">
        <div className="card"></div>
      </div>
      <Footer />
    </div>
  );
}
