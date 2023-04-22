import React from 'react';

const MovieCard = ({ movie }) => {
  const poster = (movie.images.jpg.image_url);
  const title = movie.title;
  const type = movie.type;
  return (
    <div className="movie" key={movie.mal_id}>
      <div>
        <p>{movie.year}</p>
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

export default MovieCard;