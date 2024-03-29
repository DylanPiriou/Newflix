import React, { useEffect, useState } from "react";
import "./Home.scss";
import CardHeader from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getRandomMovie, getTopRatedMovies, getTvShows } from "../../utils/Api";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  const [trendData, setTrendData] = useState([]);
  const [randomData, setRandomData] = useState()
  const [topRatedData, setTopRatedData] = useState([]);
  const [tvShowData, setTvShowData] = useState([]);

  useEffect(() => {
    getRandomMovie().then(data => {
      setTrendData(data.results);
      setRandomData(Math.min(Math.floor(Math.random() * data.results.length) + 1, 20));
    })
    getTopRatedMovies().then((data) => setTopRatedData(data.results));
    getTvShows().then((data) => setTvShowData(data.results));
  }, []);

  return (
    <div className="home">
      <Navbar />
      {trendData.slice(randomData - 1, randomData).map((movie, index) => (
        <CardHeader key={index} movie={movie} />
      ))}
      <div className="slider-container">
        <Slider data={trendData} title={"Tendances cette semaine"}/>
        <Slider data={topRatedData} title={"Les mieux notés"}/>
        <Slider data={tvShowData} title={"Les séries Tv populaires"}/>
      </div>
      <Footer />
    </div>
  );
}
