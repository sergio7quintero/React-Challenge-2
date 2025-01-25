import React, { useState } from "react";
import axios from "axios";
import "./medium.css";

export default function Medium() {
  const [data, setData] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!data) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${data}&language=en-US&page=1&api_key=a5e3288eb7e8b1141984b51682e9c406`
      );
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error occured while fetching your movie:", error);
    }
  };
  return (
    <div className="medium-container">
      <h1 className="logo-image">
        <img src="/images/movie-logo.png" alt="next scene logo"></img>
      </h1>
      <form id="mainContainer" onSubmit={handleSearch}>
        <input
          className="search-bar"
          placeholder="Search Movies Here"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>
        <button className="search-button" type="submit">
          search
        </button>
      </form>

      <div className="card-container">
        {movies.map((movie) => (
          <div
            className="results-container"
            onClick={(event) => (window.location.href = `/medium/${movie.id}`)}
          >
            <p className="movie-title">{movie.title}</p>

            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie Posters"
            />
            <p className="movie-description">{movie.overview}</p>
            <p className="movie-date">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
