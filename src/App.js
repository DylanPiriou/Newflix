import React from "react";
import Find from "./pages/Find/Find";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Favoris from "./pages/Favoris/Favoris";
import Film from "./pages/FilmDetails/FilmDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Film />} />
        <Route path="/rechercher" element={<Find />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
