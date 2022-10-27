import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import TopRated from "../components/TopRated";
import "./home.css";
import Latests from "../components/Latests";
import Footer from "../components/Footer";

export default function Home() {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=2e0a9e72249514e45f19f77ee9930761`
      )
      .then((res) => setTrendData(res.data.results));
  }, []);

  return (
    <div>
      <Navbar />
      {trendData.slice(1, 2).map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
      <div className="row-container">
        <h2 className="category-title">Tendances cette semaine</h2>
        <div className="row">
          <div className="movie-container">
            {trendData.map((trend) => {
              return (
                <div className="movie-card">
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
      <TopRated />
      <Latests />
      <Footer />
    </div>
  );
}
