import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./notfound.scss";

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
