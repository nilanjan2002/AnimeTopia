import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const API_URI = "https://api.jikan.moe/v4/anime";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Death Note");
  }, []);

  const searchMovies = async (title) => {
    const parsedTitle = encodeURIComponent(title);
    console.log(parsedTitle);
    const response = await fetch(`${API_URI}?q=${parsedTitle}&sfw`);
    const data = await response.json();

    setMovies(data.data);

  };

  function handleKeyDown(event){
    if(event.key=== "Enter"){
      searchMovies(searchTerm);
    }
  }


  return (
    <div className="app">
      <h1>ANIMETOPIA</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for animes"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No animes found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
