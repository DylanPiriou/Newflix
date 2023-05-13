import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./notfound.scss";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <span>404</span>
        <p>Oops... Impossible de trouver la page.</p>
      </div>
    </>
  );
}
