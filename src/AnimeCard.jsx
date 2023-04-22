import React from 'react';

const AnimeCard = ({ anime }) => {
  const poster = (anime.images.jpg.image_url);
  const title = anime.title;
  const type = anime.type;
  return (
    <div className="anime" key={anime.mal_id}>
      <div>
        <p>{anime.year}</p>
      </div>

      <div>
        <img src={ poster !== "N/A" ? poster : "https://via.placeholder.com/400"} alt= {title} />
      </div>

      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default AnimeCard;