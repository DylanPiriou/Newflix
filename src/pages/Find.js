import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./findFav.css";
import FavCard from "../components/FavCard";

export default function Find() {
  const [objData, setObjData] = useState([]);
  const [searchData, setSearchData] = useState("interstellar");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2e0a9e72249514e45f19f77ee9930761&language=fr-FR&query=${searchData}`
      )
      .then((res) => setObjData((res.data.results)));
  }, [searchData]);

  const message = useRef(null);

  return (
    <div>
      <Navbar />
      <div className="message" ref={message}></div>
      <div className="top-box">
        <h1 className="top-title">Rechercher votre film</h1>
        <input
          onKeyDown={(e) => {e.key === "Enter" && setSearchData(e.target.value)}}
          type="search"
          placeholder="ex. Interstellar"
        />
      </div>
      <div className="grid-container">
        {objData.length > 0 ?
        (
        objData.slice(0, 5).map((film, index) => {
          return (
            <FavCard key={index} film={film} message={message}/>
          );
        })
        ) : (
          <p>Nous n'avons pas trouvés de films qui correspondent à votre recherche. Veuillez réessayer.</p>
        )
        
        }
      </div>
      <Footer />
    </div>
  );
}
