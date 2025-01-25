import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?&language=en-US&page=1&api_key=a5e3288eb7e8b1141984b51682e9c406`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error occured while fetching your movie:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie Poster"
      />
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
    </div>
  );
}
