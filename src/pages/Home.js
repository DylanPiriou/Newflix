import axios from "axios";
import React, { useEffect, useState } from "react";
import CardHeader from "../components/CardHeader";
import Navbar from "../components/Navbar";
import TopRated from "../components/TopRated";
import "./home.css";
import Latests from "../components/Latests";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

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
        <CardHeader key={index} movie={movie} />
      ))}
      <Cards movie={trendData} />
      <TopRated />
      <Latests />
      <Footer />
    </div>
  );
}
