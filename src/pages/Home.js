import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./home.css";

export default function Home() {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=ed82f4c18f2964e75117c2dc65e2161d`
      )
      .then((res) => setTrendData(res.data.results));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-header">
        <img
          src={"https://image.tmdb.org/t/p/original/" + trendData.backdrop_path}
          alt="img film"
        />
        <div className="main-titles">
          <h1>{trendData.title}</h1>
          <p>Disponible maintenant en 4K!</p>
        </div>
      </div>
      <div className="row-container">
        <h2 className="category-title">Tendances cette semaine</h2>
        <div className="row">
          <div className="grid-trending">
            {trendData.map((trend) => {
              return (
                <div className="trend-card">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" + trend.poster_path
                    }
                    alt="img film"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
