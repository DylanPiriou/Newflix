import React, { useEffect, useState } from "react";
import "./Home.scss";
import CardHeader from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import TopRated from "../../components/Slider/TopRated";
import TvShow from "../../components/Slider/TvShow";
import Footer from "../../components/Footer/Footer";
import Trends from "../../components/Slider/Trends";
import { getRandomMovie } from "../../utils/Api";

export default function Home() {
  const [trendData, setTrendData] = useState([]);
  const [randomData, setRandomData] = useState()

  useEffect(() => {
    getRandomMovie().then(data => {
      setTrendData(data.results);
      setRandomData(Math.min(Math.floor(Math.random() * data.results.length) + 1, 20));
    })
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
