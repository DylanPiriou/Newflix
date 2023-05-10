import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.scss";
import CardHeader from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import TopRated from "../../components/Slider/TopRated";
import TvShow from "../../components/Slider/TvShow";
import Footer from "../../components/Footer/Footer";
import Trends from "../../components/Slider/Trends";

export default function Home() {
  const [trendData, setTrendData] = useState([]);
  const [randomData, setRandomData] = useState()

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=2e0a9e72249514e45f19f77ee9930761`
      )
      .then((res) => {
        setTrendData(res.data.results);
        setRandomData(Math.min(Math.floor(Math.random() * res.data.results.length) + 1, 20));
      });
  }, []);

  return (
    <div className="home">
      <Navbar />
      {trendData.slice(randomData - 1, randomData).map((movie, index) => (
        <CardHeader key={index} movie={movie} />
      ))}
      <div className="slider-container">
        <Trends movie={trendData} />
        <TopRated />
        <TvShow />
      </div>
      <Footer />
    </div>
  );
}
