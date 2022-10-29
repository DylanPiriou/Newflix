import React from "react";
import Navbar from "../components/Navbar";
import "./notfound.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <img
          src="./imgs/Oops! 404 Error with a broken robot-cuate.png"
          alt="404 img"
        />
      </div>
    </>
  );
}
