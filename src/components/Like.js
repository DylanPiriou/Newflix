import React, { useState } from "react";
import "../pages/findFav.css";

export default function Like({ film }) {
  const [liked, setLiked] = useState(true);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={() => handleLike()} className="heart">
      <i class={liked ? "fa-regular fa-heart" : "fa-solid fa-heart"}></i>
    </div>
  );
}
