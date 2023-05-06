import axios from "axios";
import React, { useEffect, useState } from "react";
import CardHeader from "../components/CardHeader";
import Navbar from "../components/Navbar";
import TopRated from "../components/TopRated";
import "./home.css";
import TvShow from "../components/TvShow";
import Footer from "../components/Footer";
import Trends from "../components/Trends";

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
        setRandomData(Math.floor(Math.random() * res.data.results.length));
      });
  }, []);

  return (
    <div>
      <Navbar />
      {trendData?.slice(randomData -1, randomData).map((movie, index) => (
        <CardHeader key={index} movie={movie} />
      ))}
      <Trends movie={trendData} />
      <TopRated />
      <TvShow />
      <Footer />
    </div>
  );
}
