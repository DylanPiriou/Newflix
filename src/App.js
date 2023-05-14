import React from "react";
import Find from "./pages/Find/Find";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import Favoris from "./pages/Find/Favoris";
import Film from "./pages/FilmDetails/FilmDetails";

function App() {
  const location = useLocation();
  const name = location.pathname
  console.log(name)
  if(name === "/"){
    document.title = `Accueil — Newflix`;
  } else if (name === "/favoris"){
    document.title = `Favoris — Newflix`;
  } else if(name === "/rechercher"){
    document.title = `Rechercher — Newflix`;
  } else {
    document.title = `Newflix — Pour les passionnés du cinéma`;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/rechercher" element={<Find />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
