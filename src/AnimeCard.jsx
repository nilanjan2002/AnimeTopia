import React, { useState } from 'react';

const AnimeCard = ({ anime }) => {
  const [isHovered, setIsHovered] = useState(false);
  const poster = (anime.images.jpg.image_url);
  const title = anime.title;
  const type = anime.type;
  const embedUrl = anime.trailer?.embed_url;

  return (
    <div 
      className="anime" 
      key={anime.mal_id} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <p>{anime.year}</p>
      </div>

      <div className="anime__media">
        {isHovered && embedUrl ? (
          <iframe 
            src={embedUrl} 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            style={{
              opacity:"1"
            }}
            title={title}
          ></iframe>
        ) : (
          <img src={ poster !== "N/A" ? poster : "https://via.placeholder.com/400"} alt= {title} />
        )}
      </div>

      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default AnimeCard;
